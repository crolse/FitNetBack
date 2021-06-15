const db = require("../models");
const { QueryTypes } = require('sequelize');
const WorkoutExercise = db.workoutExercise
const Exercise = db.exercise
const Series = require("./series.controller")
const Op = db.Sequelize.Op;
const sequelize = db.sequelize
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
                console.log("test" + series[i].weight)
            }

        })
};
//#endregion

//#region recover details of Workout
exports.recover = (req, res) => {
    sequelize.query("SELECT nameExercise , GROUP_CONCAT(reps) as reps , GROUP_CONCAT(weight) as weight , GROUP_CONCAT(rest) as rest , GROUP_CONCAT(uuidSeries) as uuidSeries, workoutexercises.uuidWorkoutExercise   from workoutexercises join series on workoutexercises.uuidWorkoutExercise = series.uuidWorkoutExercise join exercises on workoutexercises.uuidExercise = exercises.uuidExercise where uuidWorkout ='" + req.params.uuidWorkout.toString() + "'GROUP by workoutexercises.uuidWorkoutExercise ", { type: QueryTypes.SELECT }).then(data => { res.send(data) })
}
//#endregion

