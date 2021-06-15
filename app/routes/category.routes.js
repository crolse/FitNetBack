module.exports = app => {
    const category = require("../controllers/category.controllers");
    var router = require("express").Router();

    // Create a new category
    router.post("/create", category.create);
    // Recover all category
    router.get("/recover", category.recover);


    app.use('/api/category', router);
};