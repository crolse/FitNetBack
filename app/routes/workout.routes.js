module.exports = app => {
    const workout = require("../controllers/workout.controller");
    var router = require("express").Router();

    // Create a new Workout
    router.post("/create", workout.create);
    // delete a workout
   /* router.post("/signIn", user.signIn);*/

    app.use('/api/workout', router);
};