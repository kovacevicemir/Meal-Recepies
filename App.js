import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import { enableScreens } from 'react-native-screens'
import MealsNavigator from './navigation/MealsNavigation'

// npm install --save react-navigation-stack
// import { createStackNavigator } from 'react-navigation-stack';
// npm install --save react-navigation-tabs
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// npm install --save react-navigation-drawer
// import { createDrawerNavigator } from 'react-navigation-drawer';

enableScreens()

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false)
  
  if(!fontLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={setfontLoaded(true)} />
  }

  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
