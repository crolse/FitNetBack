const db = require("../models");

const Workout = db.workout
const User = db.user
const WorkoutExercise = require("./WorkoutExercise.controllers")
const Op = db.Sequelize.Op;

// #region Create an Workout
exports.create = (req, res) => {

    console.log(req.body.exercise.length)

    const workout = {
        nameWorkout: req.body.nameWorkout,
        uuidAuthorWorkout: req.body.uuidUser,
        uuidFolder: req.body.uuidFolder
    };

    //Verification Workout exist

    Workout.findOne({ where: { nameWorkout: workout.nameWorkout, uuidAuthorWorkout: workout.uuidAuthorWorkout } })
        .then(data => {
            if (data != null) {
                res.status(406).send({
                    message: "A workout with the same name already exist"

                });
            }
            else {
                // Save a workout in database
                Workout.create(workout)
                    .then(data => {
                        //res.send(data);
                        //The function is executed as long as there are exercises left
                        for (let i = 0; i < req.body.exercise.length; i++) {
                            WorkoutExercise.create(req.body.exercise[i].uuidExercise, data.uuidWorkout, req.body.exercise[i].series)
                        }
                        res.status(200).send({
                            message: "Workout save"
                        });
                    })
            }
        })
};
//#endregion
//#region recover workout of a user
exports.recover = (req, res) => {
    Workout.findAll({
        attributes: [
            "nameWorkout",
            "uuidFolder",
            "uuidWorkout"
        ],
        include: {
            model: User,
            required: true,
            attributes: [],
            where: { uuidUser: req.body.uuidUser }

        }
    }).then(data => { res.send(data) })
}
//#endregion