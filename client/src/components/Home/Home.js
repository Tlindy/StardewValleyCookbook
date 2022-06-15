import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

import { getRecipes, getRecipesBySearch } from "../../actions/recipes";
import Pagination from "../Pagination";
import Recipes from "../Recipes/Recipes";
import Form from "../Form/Form";
import useStyles from "./styles";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {

    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get("page") || 1;
    const searchQuery = query.get("searchQuery");
    const [search, setSearch] = useState("");
    const [ingredients, setIngredients] = useState([]);


    useEffect(() => {
        dispatch(getRecipes());
    }, [currentId, dispatch]);

    const searchRecipe = () => {
        if(search.trim() || ingredients) {
            dispatch(getRecipesBySearch({ 
                search, 
                ingredients: ingredients.map(ingredient => ingredient.toLowerCase()).join(",") 
            }));
        } else {
            history.push("/");
        }
    };

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            searchRecipe();
        }
    };

    const handleAdd = (ingredient) => {
        setIngredients([...ingredients, ingredient]);
    };

    const handleDelete = (ingredientToDelete) => {
        setIngredients(ingredients.filter((ingredient) => ingredient !== ingredientToDelete));
    }

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid 
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={3}
                    className={classes.gridContainer}
                >
                    <Grid item xs={12} sm={6} md={9}>
                        <Recipes setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField 
                                name="search"
                                variant="outlined"
                                label="Search Recipes"
                                onKeyPress={handleKeyPress}
                                fullWidth
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <ChipInput 
                                style={{ margin: "10px 0" }}
                                value={ingredients}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                newChipKeys={["Enter", " "]}
                                label="Search by Ingredients (enter or space to add)"
                                variant="outlined"
                            />
                            <Button 
                                onClick={searchRecipe}
                                className={classes.searchButton}
                                variant="contained"
                                color="primary"
                            >
                                Search
                            </Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={6}>
                            <Pagination />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;