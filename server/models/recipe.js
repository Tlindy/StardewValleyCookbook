import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    name: String,
    description: String,
    ingredients: [String],
    energy: String,
    health: String,
    sellPrice: String,
    source:[String],
    selectedFile: String,
    favorite: {
        type: Boolean,
        default: false
    }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;