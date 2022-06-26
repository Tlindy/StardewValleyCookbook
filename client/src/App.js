import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    const user = JSON.parse(localStorage.getItem("profile"));

    return (
        <BrowserRouter>
            <ScrollToTop>
                <Container maxWidth="xl">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={() => <Redirect to="/recipes" />} />
                        <Route path="/recipes" exact component={Home} />
                        <Route path="/recipes/search" exact component={Home} />
                        <Route path="/recipes/:id" component={RecipeDetails} />
                        <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/recipes" />)} />
                    </Switch>
                </Container>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default App;