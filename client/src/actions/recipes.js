import * as api from "../api";

export const getRecipes = () => async (dispatch) => {
    try{
        const { data } = await api.fetchRecipes();

        dispatch({ type: "FETCH_ALL_RECIPES", payload: data });
    } catch (error ) {
        console.log(error);
    }
}

export const createRecipe = (recipe) => async (dispatch) => {
    try {
        const { data } = await api.createRecipe(recipe);

        dispatch({ type: "CREATE_RECIPE", payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updateRecipe = (id, recipe) => async (dispatch) => {
    try {
        const { data } = await api.updateRecipe(id, recipe);

        dispatch({ type: "UPDATE_RECIPE", payload: data });
    } catch (error) {
        console.log(error);
    }
}