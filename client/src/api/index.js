import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchRecipes = () => API.get("/recipes");
export const createRecipe = (newRecipe) => API.post("/recipes", newRecipe);
export const updateRecipe = (id, updatedRecipe) => API.put(`/recipes/${id}`, updatedRecipe);
export const deleteRecipe = (id) => API.delete(`/recipes/${id}`);

export const signIn = (FormData) => API.post("/user/signin", FormData);
export const signUp = (FormData) => API.post("/user/signup", FormData);