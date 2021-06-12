const db = require("../models");

const WorkoutExercise = db.workoutExercise
const Series = require("./series.controller")
const Op = db.Sequelize.Op;

// #region Create an Workout
exports.create = (uuidExercise, uuidWorkout, series) => {

    const workoutExercise = {
        uuidExercise: uuidExercise,
        uuidWorkout: uuidWorkout,
    };
    console.log("ohohoh" + workoutExercise)
    console.log("series" + series)


    WorkoutExercise.create(workoutExercise)
        .then(data => {
            for (let i = 0; i < series.length; i++) {
                Series.create(data.uuidWorkoutExercise, series[i].weight, series[i].reps, series[i].rest)
            }

        })
};
//#endregion