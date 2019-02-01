import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Login = createStackNavigator({
	Login: LoginScreen,
	Signup: SignupScreen,
});

export default Login;