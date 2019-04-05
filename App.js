import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AppNavigator from './navigation/AppNavigator';
import { Font, AppLoading, Asset } from "expo";
import { AsyncStorage } from "react-native";

// http://10.0.2.2:3000/graphql -> for android emulator
const client = new ApolloClient({
    uri: "https://o6b8ejudj2.execute-api.us-east-1.amazonaws.com/dev/graphql",
    // uri: "http://10.0.2.2:3000/graphql",
    // uri: "http://localhost:3000/graphql",
    request: async operation => {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
            operation.setContext({
                headers: {
                    authorization: `Bearer ${token}`,
                }
            });
        }
      },
});

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { loading: true };
    }

    async _cacheResourcesAsync() {
        const images = [
            require('./assets/images/lt.png'),
        ];

        const font = Font.loadAsync({
            'Avenir Next': require('./assets/fonts/AvenirNext-Regular.ttf'),
        });
    
        const cacheImages = images.map((image) => {
          return Asset.fromModule(image).downloadAsync();
        });
        return Promise.all([...cacheImages, font])
    
    }

    render() {
        if (this.state.loading) {
            return (
                <AppLoading 
                    startAsync={this._cacheResourcesAsync}
                    onFinish={() => this.setState({ loading: false })}
                />
            );
        } 

        return (
            <ApolloProvider client={client}>
                <AppNavigator />
            </ApolloProvider>
        );
    }
}

export default App;