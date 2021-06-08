module.exports = app => {
    const user = require("../controllers/user.controller");
    var router = require("express").Router();

    // Create a new user
    router.post("/signUp", user.signUp);

    app.use('/api/user', router);
};