module.exports = app => {
    const exercise = require("../controllers/exercise.controller");
    var router = require("express").Router();

    // Create a new exercise
    router.post("/create", exercise.create);
    // delete an Exercise
    router.delete("/delete", exercise.delete);
    // recover all Exercise of a user
    router.get("/recover/:uuidUser", exercise.recover);

    app.use('/api/exercise', router);
};