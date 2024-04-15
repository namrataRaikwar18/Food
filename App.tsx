/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import Onboarding from './src/screens/Onboarding';
import Login from './src/screens/Auth/Login';

export type RootStackParamList = {
  SplashScreen: undefined;
  Onboarding: undefined;
  Login: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="SplashScreen"
          initialRouteName="Login"
          screenOptions={{headerShown: false, contentStyle: styles.container}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
