import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getRecipes } from "../actions/recipes";

import useStyles from "./styles";

const Paginate = ({ page }) => {
    const { numberOfPages } = useSelector((state) => state.recipes);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (page) dispatch(getRecipes(page))
    }, [page]);

    return (
        <Pagination
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            boundaryCount={1}
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/recipes?page=${item.page}`} />
            )}
        />
    );
};

export default Paginate;