/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import CreateAccount from './src/screens/CreateAccount';
import CreateAccount1 from './src/screens/CreateAccount1';
import Login from './src/screens/Login';
import PhoneNoVerification from './src/screens/PhoneNoVerification';
import Splash from './src/screens/Splash';
import Account from './src/screens/Account'
import TabNavigation1 from './src/navigation/TabNavigation1';
AppRegistry.registerComponent(appName, () => App);
