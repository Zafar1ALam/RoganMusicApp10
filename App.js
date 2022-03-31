
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer, DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import {
  ActivityIndicator, StyleSheet, Text, View, useColorScheme,

} from "react-native";

import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import CreateAccount1 from './src/screens/CreateAccount1';
import COLORS from './src/utilities/colors/Color';
import Login1 from './src/screens/Login1';

import Verification from './src/screens/Verification';
import CircleUsernameHere from './src/screens/CircleUsernameHere';
import AddMusic from './src/screens/AddMusic';
import FollowUsername from './src/screens/FollowUsername';
import CreatePlaylist from './src/screens/CreatePlaylist';
import CreateAccount from './src/screens/CreateAccount';
import CreateSpace from './src/screens/CreateSpace';
import Chat from './src/screens/Chat'
import SelectUserToChat from './src/screens/SelectUserToChat';
import Account from './src/screens/Account';
import Settings from './src/screens/Settings'
import TabNavigation1 from './src/navigation/TabNavigation1';
import MyPlaylist from './src/screens/MyPlaylist';
import ForgetPassword from './src/screens/ForgetPassword'
import ResetPassword from './src/screens/ResetPassword';
import AudioPlayer from './src/screens/AudioPlayer';
import CreatePlaylistMusic from './src/screens/CreatePlaylistMusic';

const Stack = createNativeStackNavigator();
const App = props => {
  const CustomDarkTheme = {

    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: COLORS.black000000,
      text: COLORS.whiteFFFFFF,
      //border: COLORS.black000000_20,
      boder: '#707070',// COLORS.grey707070,
      surface: COLORS.black000000,
      placeholder: COLORS.whiteFFFFFF,
      // onSurface: COLORS.black000000,
      backdrop: COLORS.black000000
    },
  };
  return (

    <PaperProvider theme={CustomDarkTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'CreateAccount1'}
        //  initialRouteName={'Account'}
        >
          <Stack.Screen name="TabNavigation1" component={TabNavigation1} options={{
            headerShown: false,
          }} />

          <Stack.Screen name="MyPlaylist" component={MyPlaylist} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="CreatePlaylistMusic" component={CreatePlaylistMusic} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="AudioPlayer" component={AudioPlayer} options={{
            headerShown: false,
          }} />


          <Stack.Screen name="Account" component={Account} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Settings" component={Settings} options={{
            headerShown: false,
          }} />


          <Stack.Screen name="CreateAccount1" component={CreateAccount1} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Login1" component={Login1} options={{
            headerShown: false,
          }} />

          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{
            headerShown: false,
          }} />


          <Stack.Screen name="Chat" component={Chat} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="SelectUserToChat" component={SelectUserToChat} options={{
            headerShown: false,
          }} />

          <Stack.Screen name="CreateSpace" component={CreateSpace} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="CreatePlaylist" component={CreatePlaylist} options={{
            headerShown: false,
          }} />






          <Stack.Screen name="AddMusic" component={AddMusic} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="CircleUsernameHere" component={CircleUsernameHere} options={{
            headerShown: false,
          }} />

          <Stack.Screen name="FollowUsername" component={FollowUsername} options={{
            headerShown: false,
          }} />



          <Stack.Screen name="Verification" component={Verification} options={{
            headerShown: false,
          }} />

          <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{
            headerShown: false,
          }} />


        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
};

App.propTypes = {

};

export default App;