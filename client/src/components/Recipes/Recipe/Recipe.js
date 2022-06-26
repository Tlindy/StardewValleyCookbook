import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, List, ListItem, ListItemText } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

import { deleteRecipe } from "../../../actions/recipes";

/*
    
*/

const Recipe = ({ recipe, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}  raised elevation={6}>
            <div className={classes.overlay}>
                <Typography variant="h5">{recipe.name}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                    style={{color: "grey"}} 
                    size="small" 
                    onClick={() => setCurrentId(recipe._id)}>
                        <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            <CardMedia component="img" image={recipe.selectedFile} title={recipe.name} />
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{recipe.description}</Typography>
            </div>
            <CardContent>
                <List className={classes.title} variant="h5" gutterBottom>
                    {recipe.ingredients.map((ingredient) => (
                        <ListItem key={ingredient} className={classes.list}>
                            <ListItemText primary={`+ ${ingredient}`} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteRecipe(recipe._id))}>
                    <DeleteIcon fontSize="small" />
                        Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Recipe;