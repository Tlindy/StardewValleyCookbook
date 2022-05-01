import axios from "axios";

const url = "http://localhost:5000/recipes";

export const fetchRecipes = () => axios.get(url);
export const createRecipe = (newRecipe) => axios.post(url, newRecipe);
export const updateRecipe = (id, updatedRecipe) => axios.put(`${url}/${id}`, updatedRecipe);
export const deleteRecipe = (id) => axios.delete(`${url}/${id}`);