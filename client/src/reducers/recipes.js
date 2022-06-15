import { FETCH_ALL_RECIPES, FETCH_RECIPES_BY_SEARCH, CREATE_RECIPE, UPDATE_RECIPE, DELETE_RECIPE } from "../constants/actionTypes";


export default (recipes = [], action) => {
    switch (action.type) {
        case FETCH_ALL_RECIPES:
            return action.payload;
        case FETCH_RECIPES_BY_SEARCH:
            return action.payload;
        case CREATE_RECIPE:
            return [...recipes, action.payload];
        case UPDATE_RECIPE:
            return recipes.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe);
        case DELETE_RECIPE:
            return recipes.filter((recipe) => recipe._id !== action.payload);
        default:
            return recipes;
    }
}