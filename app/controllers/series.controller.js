const db = require("../models");

const Series = db.series
const Op = db.Sequelize.Op;

// #region Create an Workout
exports.create = (uuidWorkoutExercise, weight, reps, rest) => {

    const series = {
        uuidWorkoutExercise: uuidWorkoutExercise,
        weight: weight,
        reps: reps,
        rest: rest
    };
    Series.create(series)
};
//#endregion