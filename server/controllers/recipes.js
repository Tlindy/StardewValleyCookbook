import mongoose from "mongoose";
import Recipe from "../models/recipe.js";

export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();

        res.status(200).json(recipes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getRecipesBySearch = async (req, res) => {
    const { searchQuery, ingredients } = req.query

    try {
        const name = new RegExp(searchQuery, "i");

        const recipes = await Recipe.find({ 
            $or: [ { name }, { ingredients: { $in: ingredients.split(",") } }] 
        });

        res.json({ data: recipes });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createRecipe = async (req, res) => {
    const recipe = req.body;

    const newRecipe = new Recipe(recipe);

    try {
        await newRecipe.save();

        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateRecipe = async (req, res) => {
    const { id: _id } = req.params;
    const recipe = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        res.status(404);
        res.send("No recipe with that id");
    }
    const updatedRecipe = await Recipe.findByIdAndUpdate(_id, { ...recipe, _id }, { new: true });

    res.json(updatedRecipe);
}

export const deleteRecipe = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404);
        res.send("No recipe with that id");
    }
    await Recipe.findByIdAndRemove(id);
    res.json({ message: 'Recipe deleted successfully' })
}