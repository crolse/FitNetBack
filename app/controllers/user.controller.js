const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const passwordHash = require('password-hash');

// #region Create a User
exports.signUp = (req, res) => {
    // Verification of fields
    if (!req.body.email || !req.body.password) {
        res.status(400).send({
            message: "the first name and password fields cannot be empty"
        });
        return;
    }

    // Hash password 
    const options = {
        algorithm: "sha256" ,
    }
    var hashedPassword = passwordHash.generate(req.body.password ,options);


    const user = {
        email: req.body.email,
        password: hashedPassword,
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

