import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Recipe from "./Recipe/Recipe";

import useStyles from "./styles";

const Recipes = ({ setCurrentId }) => {
    const { recipes } = useSelector((state) => state.recipes);
    const classes = useStyles();

    return (
        !recipes?.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {recipes.map((recipe) => (
                    <Grid key={recipe._id} item xs={12} s={6} md={4} lg={3} xl={2}>
                        <Recipe recipe={recipe} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Recipes;