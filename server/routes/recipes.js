import express from "express";

import { getRecipes, createRecipe, updateRecipe } from "../controllers/recipes.js";

const router = express.Router();

router.get("/", getRecipes);
router.post("/", createRecipe);
router.put("/:id", updateRecipe);


export default router;