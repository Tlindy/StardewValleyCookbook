import { FETCH_ALL_RECIPES, FETCH_RECIPES_BY_SEARCH, CREATE_RECIPE, UPDATE_RECIPE, DELETE_RECIPE } from "../constants/actionTypes";
import * as api from "../api";

export const getRecipes = (page) => async (dispatch) => {
    try{
        const { data } = await api.fetchRecipes(page);

        console.log(data);

        dispatch({ type: FETCH_ALL_RECIPES, payload: data });
    } catch (error ) {
        console.log(error);
    }
};

export const getRecipesBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchRecipesBySearch(searchQuery);

        dispatch({ type: FETCH_RECIPES_BY_SEARCH, payload: data });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

export const createRecipe = (recipe) => async (dispatch) => {
    try {
        const { data } = await api.createRecipe(recipe);

        dispatch({ type: CREATE_RECIPE, payload: data })
    } catch (error) {
        console.log(error);
    }
};

export const updateRecipe = (id, recipe) => async (dispatch) => {
    try {
        const { data } = await api.updateRecipe(id, recipe);

        dispatch({ type: UPDATE_RECIPE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteRecipe = (id) => async (dispatch) => {
    try {
        await api.deleteRecipe(id);

        dispatch({ type: DELETE_RECIPE, payload: id })
    } catch (error) {
        console.log(error);
    }
};