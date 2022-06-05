import express from "express";

import { getRecipes, createRecipe, updateRecipe, deleteRecipe } from "../controllers/recipes.js";
import auth from "../middleware/auth.js";


const router = express.Router();

router.get("/", getRecipes);
router.post("/", auth, createRecipe);
router.put("/:id", auth, updateRecipe);
router.delete("/:id", auth, deleteRecipe);


export default router;