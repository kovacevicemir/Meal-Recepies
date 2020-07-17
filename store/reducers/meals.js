//This is file with all logic such as mark meal as favourite (REDUCER)

//MEALS REDUCERS

import {MEALS} from '../../data/dummy-data'

const initialState = {
    meals:MEALS,
    filteredMeals:MEALS,
    favouriteMeals:[]
}


const mealsReducer = (state = initialState, action) => {
    return state
}

export default mealsReducer;