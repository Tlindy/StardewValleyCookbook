export default (recipes = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return recipes;
        case "CREATE":
            return recipes;
        default:
            return recipes;
    }
}