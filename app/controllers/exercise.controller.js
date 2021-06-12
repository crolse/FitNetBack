const db = require("../models");
const Exercise = db.exercise;
const Op = db.Sequelize.Op;



// #region Create an Exercise
exports.create = (req, res) => {
    // Verification of fields
    if (!req.body.nameExercise || !req.body.uuidUser) {
        res.status(400).send({
            message: "fields cannot be empty"
        });
        return;
    }

    const exercise = {
        nameExercise: req.body.nameExercise,
        uuidAuthorExercise: req.body.uuidUser,
    };

    //Verification exercise exist

    Exercise.findOne({ where: { nameExercise: exercise.nameExercise, uuidAuthorExercise: exercise.uuidAuthorExercise } })
        .then(data => {
            if (data != null) {
                res.status(406).send({
                    message: "A exercise with the same name already exist"
                });
            }
            else {
                // Save a exercise in database
                Exercise.create(exercise)
                    .then(data => {
                        res.send(data);
                    })
            }
        })
};
//#endregion

//#region Delete an Exercise
exports.delete = (req, res) => {
    // Verification of fields
    if (!req.body.nameExercise || !req.body.uuidUser) {
        res.status(400).send({
            message: "Empty fields"
        });
        return;
    }
    const exercise = {
        nameExercise: req.body.nameExercise,
        uuidAuthorExercise: req.body.uuidUser,
    };

    //Verification email exist

    Exercise.findOne({ where: { nameExercise: exercise.nameExercise, uuidAuthorExercise: exercise.uuidAuthorExercise } })
        .then(data => {
            if (data == null) {
                res.status(406).send({
                    message: "Exercise was not found"
                });
            }
            else {
                // delete an Exercise in database
                Exercise.destroy({ where: { nameExercise: exercise.nameExercise, uuidAuthorExercise: exercise.uuidAuthorExercise } })
                    .then(data => {
                        res.status(200).send({
                            message: "Exercise deleted"
                        });
                    })
            }
        })


}
//#endregion

//#region Recover all exercise of a User
exports.recover = (req, res) => {
    // Verification of fields
    if (!req.body.uuidUser) {
        res.status(400).send({
            message: "Empty fields"
        });
        return;
    }

    // #TODO ADD Exercise BY DEFAULT
    // Recover all Exercise of a user 
    Exercise.findAll({ where: { uuidAuthorExercise: req.body.uuidUser } })
        .then(data => {
            res.send(data);
        })
};
//#endregion

