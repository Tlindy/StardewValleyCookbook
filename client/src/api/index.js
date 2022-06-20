import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if(localStorage.getItem("profile")) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }

    return req;
});

export const fetchRecipes = (page) => API.get(`/recipes?page=${page}`);
export const fetchRecipesBySearch = (searchQuery) => API.get(
    `/recipes/search?searchQuery=${searchQuery.search || "none"}&ingredients=${searchQuery.ingredients}`
    );
export const createRecipe = (newRecipe) => API.post("/recipes", newRecipe);
export const updateRecipe = (id, updatedRecipe) => API.put(`/recipes/${id}`, updatedRecipe);
export const deleteRecipe = (id) => API.delete(`/recipes/${id}`);

export const signIn = (FormData) => API.post("/user/signin", FormData);
export const signUp = (FormData) => API.post("/user/signup", FormData);