import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import colors from './src/consts/colors'
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import HomeScreen from './src/views/screens/HomeScreen';

export default class App extends Component {
  render() {
    
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='BoardScreen' component={OnBoardScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>    
    )
  }
}
