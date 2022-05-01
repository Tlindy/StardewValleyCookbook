import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import { createRecipe, updateRecipe } from "../../actions/recipes";

const Form = ({ currentId, setCurrentId }) => {
    const [recipeData, setRecipeData] = useState({
        name: "",
        description: "",
        ingredients: "",
        energy: "",
        health: "",
        buffs: "",
        sellPrice: "",
        source: "",
        selectedFile: "",
        favorite: false
    })
    const recipe = useSelector((state) => currentId ? state.recipes.find((r) => r._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(recipe) {
            setRecipeData(recipe);
        }
    }, [recipe])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateRecipe(currentId, recipeData));
        } else {
            dispatch(createRecipe(recipeData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setRecipeData({
            name: "",
            description: "",
            ingredients: "",
            energy: "",
            health: "",
            buffs: "",
            sellPrice: "",
            source: "",
            selectedFile: "",
            favorite: false
        })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? "Editing" : "Adding"} a Recipe</Typography>
                <TextField 
                    name="name"
                    variant="outlined"
                    label="Recipe Name"
                    fullWidth
                    value={recipeData.name}
                    onChange={(e) => setRecipeData({ ...recipeData, name: e.target.value })}
                />
                <TextField 
                    name="description"
                    variant="outlined"
                    label="Description"
                    fullWidth
                    value={recipeData.description}
                    onChange={(e) => setRecipeData({ ...recipeData, description: e.target.value })}
                />
                <TextField 
                    name="ingredients"
                    variant="outlined"
                    label="Ingredients"
                    fullWidth
                    value={recipeData.ingredients}
                    onChange={(e) => setRecipeData({ ...recipeData, ingredients: e.target.value.split(",") })}
                />
                <TextField 
                    name="energy"
                    variant="outlined"
                    label="Energy"
                    fullWidth
                    value={recipeData.energy}
                    onChange={(e) => setRecipeData({ ...recipeData, energy: e.target.value })}
                />
                <TextField 
                    name="health"
                    variant="outlined"
                    label="Health"
                    fullWidth
                    value={recipeData.health}
                    onChange={(e) => setRecipeData({ ...recipeData, health: e.target.value })}
                />
                <TextField 
                    name="buffs"
                    variant="outlined"
                    label="Buffs"
                    fullWidth
                    value={recipeData.buffs}
                    onChange={(e) => setRecipeData({ ...recipeData, buffs: e.target.value })}
                />
                <TextField 
                    name="sellPrice"
                    variant="outlined"
                    label="Sell Price"
                    fullWidth
                    value={recipeData.sellPrice}
                    onChange={(e) => setRecipeData({ ...recipeData, sellPrice: e.target.value })}
                />
                <TextField 
                    name="source"
                    variant="outlined"
                    label="Source"
                    fullWidth
                    value={recipeData.source}
                    onChange={(e) => setRecipeData({ ...recipeData, source: e.target.value.split(",") })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setRecipeData({...recipeData, selectedFile: base64})}
                    />
                </div>
                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    type="submit" 
                    fullWidth>
                        Submit
                </Button>
                <Button  
                    variant="contained" 
                    color="secondary" 
                    size="small" 
                    onClick={clear} 
                    fullWidth>
                        Clear
                </Button>
            </form>
        </Paper>
    );
}

export default Form;