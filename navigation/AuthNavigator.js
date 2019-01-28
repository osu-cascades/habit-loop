import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

const Login = createStackNavigator({
	Login: LoginScreen,
});

export default Login;