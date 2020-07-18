//Action identifiers or types
export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const SET_FILTERS = "SET_FILTERS";

//Action Creator`s
export const toggleFavourite = (mealId) => {
  return { type: TOGGLE_FAVOURITE, payload: mealId };
};

export const setFilters = (filterSettings) => {
    return { type: SET_FILTERS, payload:filterSettings}
}

//Actions Creator`s are used inside component, for example SideBar dispatch
//some action-creator(props), and automatically in reducer switch statement
//it triggers some process in case Action Creator type: is same as in switch...
//Than reducer takes those parameters from action creator (payload) and does the magic
