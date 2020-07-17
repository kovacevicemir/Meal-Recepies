//This is file with all logic such as mark meal as favourite
import { MEALS } from "../../data/dummy-data";

//Action identifier or type or simple action name
import { TOGGLE_FAVOURITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};

//MEALS REDUCER
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const mealId = action.payload;
      const existingIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === mealId
      );

      //If index exists in favourite meals than DELETE it
      if (existingIndex >= 0) {
        const newFavMeals = [...state.favouriteMeals];
        newFavMeals.splice(existingIndex, 1);
        return { ...state, favouriteMeals: newFavMeals };
      } else {
        //If index not exist in favourite meals then ADD it
        //concat returns new array, it takes old array and add new items to it
        const meal = state.meals.find((meal) => meal.id === mealId);
        return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
      }

    default:
      return state;
  }
};

export default mealsReducer;
