import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import useStyles from "./styles";

const Recipe = ({ recipe, setCurrentId }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={recipe.selectedFile} title={recipe.name} />
            <div className={classes.overlay}>
                <Typography variant="h6">{recipe.name}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                    style={{color: "white"}} 
                    size="small" 
                    onClick={() => setCurrentId(recipe._id)}>
                        <MoreHorizIcon fontSize="default" />
                </Button>
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