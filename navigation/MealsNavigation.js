
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';

import React from "react";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

import CategoriesScreen from "../screens/CaregoriesScreen";
import CategoryMealsScreen from "../screens/CaregoryMealsScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from '../screens/FiltersScreen'

//MealsNavigator is nested inside MealsFavTabNavigator down below.
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      headerTitle: "A Screen",
    },
  }
);

//This is another stack of screens used for favourites navigation
const FavNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      headerTitle: "A Screen",
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    //First Argument
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favourites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    //Second argument
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

//no reason for this navigator just to have header
const FiltersNavigator = createStackNavigator({
  Filters:FiltersScreen
})

const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigator,
  Filters: FiltersNavigator
})

//Explanation Main navigator -> have MealsFavTabNavigator -> which have MealsNavigator nested...
export default createAppContainer(MainNavigator);
