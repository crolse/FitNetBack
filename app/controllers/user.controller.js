const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

//#region Create a User
exports.signUp = (req, res) => {
    // the first name and password fields cannot be empty
    if (!req.body.email || !req.body.password) {
        res.status(400).send({
            message: "the first name and password fields cannot be empty"
        });
        return;
    }


    const user = {
        email: req.body.email,
        password: req.body.password,
    };

    // Save a user in database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while saving user."
            });
        });
};
//#endregion

