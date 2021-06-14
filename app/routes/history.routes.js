module.exports = app => {
    const history = require("../controllers/history.controllers");
    var router = require("express").Router();

    // Create a new history
    router.post("/save", history.create);

    // delete a workout
    /* router.post("/signIn", user.signIn);*/

    app.use('/api/history', router);
};