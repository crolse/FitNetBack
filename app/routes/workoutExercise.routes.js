const { workoutExercise } = require("../models");

module.exports = app => {
    const workoutExercise = require("../controllers/WorkoutExercise.controllers");
    var router = require("express").Router();

    // Create a new Workout

    router.get("/recover", workoutExercise.recover);
    // delete a workout
    /* router.post("/signIn", user.signIn);*/

    app.use('/api/workoutExercise', router);
};