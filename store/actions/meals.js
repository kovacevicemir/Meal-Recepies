//Action identifier or type
export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";

//Action Creator
export const toggleFavourite = (mealId) => {
  return { type: TOGGLE_FAVOURITE, payload: mealId };
};
