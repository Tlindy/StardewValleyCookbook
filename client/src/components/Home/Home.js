import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getRecipes } from "../../actions/recipes";
import Recipes from "../Recipes/Recipes";
import Form from "../Form/Form";
import useStyles from "./styles";

const Home = () => {

    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Recipes setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;