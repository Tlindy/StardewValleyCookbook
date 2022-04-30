import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";

import useStyles from "./styles";

const Recipe = ({ recipe }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={recipe.selectedFile} title={recipe.name} />
            <div className={classes.overlay}>
                <Typography variant="h6">{recipe.name}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{recipe.description}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{recipe.ingredients}</Typography>
            </CardContent>
        </Card>
    );
}

export default Recipe;