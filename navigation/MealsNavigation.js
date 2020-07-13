import { createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from 'react-navigation'
import CategoriesScreen from "../screens/CaregoriesScreen";
import CategoryMealsScreen from "../screens/CaregoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator)