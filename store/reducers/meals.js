//This is file with all logic such as mark meal as favourite
import { MEALS } from "../../data/dummy-data";

//Action identifier or type or simple action name
import { TOGGLE_FAVOURITE, SET_FILTERS } from "../actions/meals";

//Action identifier or type or simple action name


const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
  filters: {
    glutenFree:true,
    lactoseFree:true,
    veganFree:true,
    vegetarian:true,
  }
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
    
    case SET_FILTERS:
        const filters = action.payload

        //Also filter all meals here
        const updatedFilteredMeals = state.meals.filter(meal => {
            //&& for bolean values only returns true if both arg are true
            //&& for bolean values only returns false if both arg are false

            //burger -> isGlutenFree:false
            //gluten free is true
            //true && true -> remove from array

            if(!meal.isGlutenFree && filters.glutenFree){
                return false;
            }
            if(!meal.isLactoseFree && filters.lactoseFree){
                return false;
            }
            if(!meal.isVegan && filters.veganFree){
                return false;
            }
            if(!meal.isVegetarian && filters.vegetarian){
                return false;
            }

            console.log(meal.title)
            return true
        })

        return {...state, filters, filteredMeals:updatedFilteredMeals}

    default:
      return state;
  }
};

export default mealsReducer;
