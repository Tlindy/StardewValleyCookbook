import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Recipe from "./Recipe/Recipe";

import useStyles from "./styles";

const Recipes = () => {
    const recipes = useSelector((state) => state.recipes);
    const classes = useStyles();

    console.log(recipes);

    return (
        !recipes.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" space={3}>
                {recipes.map((recipe) => (
                    <Grid key={recipe._id} item xs={12} sm={6}>
                        <Recipe recipe={recipe} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Recipes;