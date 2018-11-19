import Expo from 'expo';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AppNavigator from './navigation/AppNavigator';
import { Font, AppLoading } from "expo";

// Not able to be used with localhost
const client = new ApolloClient({
    uri: "http://192.168.0.11:4000/graphql"
})

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return (
                <AppLoading />
            );
        }
        return (
            <ApolloProvider client={client}>
                <AppNavigator />
            </ApolloProvider>
        );
    }
}

Expo.registerRootComponent(App);