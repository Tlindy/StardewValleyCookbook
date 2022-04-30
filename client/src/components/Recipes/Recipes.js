import React from "react";
import Recipe from "./Recipe/Recipe";

import useStyles from "./styles";

const Recipes = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <h1>RECIPES</h1>
            <Recipe />
            <Recipe />
        </React.Fragment>
    );
}

export default Recipes;