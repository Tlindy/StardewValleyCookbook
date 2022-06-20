import { FETCH_ALL_RECIPES, FETCH_RECIPES_BY_SEARCH, CREATE_RECIPE, UPDATE_RECIPE, DELETE_RECIPE } from "../constants/actionTypes";


export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages
            };
        case FETCH_RECIPES_BY_SEARCH:
            return {
                ...state,
                recipes: action.payload
            };
        case CREATE_RECIPE:
            return [...state, action.payload];
        case UPDATE_RECIPE:
            return state.map((recipe) => recipe._id === action.payload._id ? action.payload : recipe);
        case DELETE_RECIPE:
            return state.filter((recipe) => recipe._id !== action.payload);
        default:
            return state;
    }
}