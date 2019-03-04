import React, { Component } from 'react';
import { 
  Text,
  View,
  TextInput,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { compose } from 'react-apollo';
import { withNavigation } from 'react-navigation';
import { Signup } from '../data';
import { Formik } from 'formik';
import * as yup from 'yup'

const SignupComponent = props => {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View>
          <Text style={styles.signupText}>Sign up for a new CBT Habit Tracker Account!</Text>
        </View>
        <View>
          <TextInput
            placeholder="username" 
            value={props.values.username}
            onChangeText={props.handleChange('username')}
            style={styles.input}
          />
        </View>
        <View>
          <TextInput
            placeholder="email" 
            value={props.values.email}
            onChangeText={props.handleChange('email')}
            keyboardType='email-address'
            autoCapitalize='none'
            style={styles.input}
          />
        </View>
        <View>
          <TextInput
            placeholder="password"
            value={props.values.password}
            onChangeText={props.handleChange('password')}
            textContentType="password"
            secureTextEntry
            style={styles.input}
          />
          {props.touched.password && props.errors.password && <Text>{props.errors.password}</Text>}
        </View>
        <View>
          <TouchableOpacity 
            onPress={props.handleSubmit}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
}


class SignupForm extends Component {
  signupUser = async values => {
    const signupData = {
      variables: {
        input: {
          email: values.email,
          password: values.password,
          username: values.username,
        }
      }
    }

    try {
      const result = await this.props.mutate(signupData);
      const token = result.data.signup;

      await AsyncStorage.setItem('userToken', token)
      this.props.navigation.navigate('Main')

    } catch (err) {
      console.log('Error signing up:', JSON.stringify(err))
      this.setState({ error: true })
    }
  }
  render() {
      return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
            }}
            onSubmit={this.signupUser}
            render={props => <SignupComponent {...props}/>}
            validationSchema={
              yup.object().shape({
                username: yup
                    .string()
                    .required(),
                password: yup
                    .string()
                    .min(8, "Password must have 8 characters")
                    .required(),
                email: yup
                    .string()
                    .email()
                    .required()
            })}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E9E9E9',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    paddingHorizontal: 10,
    fontFamily: 'Avenir Next',
  },
  buttonContainer: {
    backgroundColor: '#999999',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Avenir Next',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  signupText: {
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Avenir Next',
  }
});

export default compose(
  Signup,
  withNavigation
)(SignupForm);
