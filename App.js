import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AppNavigator from './navigation/AppNavigator';
import { AppLoading } from "expo";
import { AsyncStorage } from "react-native";

// http://10.0.2.2:3000/graphql -> for android emulator
const client = new ApolloClient({
    uri: "https://o6b8ejudj2.execute-api.us-east-1.amazonaws.com/dev/graphql",
    // uri: "http://10.0.2.2:3000/graphql",
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
})

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return <AppLoading />;
        } 
        
        return (
            <ApolloProvider client={client}>
                <AppNavigator />
            </ApolloProvider>
        );
    }
}

export default App;