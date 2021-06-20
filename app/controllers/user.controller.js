const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');

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
        algorithm: "sha256",
    }
    var hashedPassword = passwordHash.generate(req.body.password, options);


    const user = {
        email: req.body.email,
        password: hashedPassword,
    };

    //Verification email exist

    User.findOne({ where: { email: req.body.email } })
        .then(data => {
            if (data != null) {
                res.status(406).send({
                    message: "Email adress already exist"
                });
            }
            else {
                // Save a user in database
                User.create(user)
                    .then(data => {
                        res.send(data);
                    })
            }
        })
};
//#endregion

//#region Sign In
exports.signIn = (req, res) => {
    // Verification of fields
    if (!req.body.email || !req.body.password) {
        res.status(400).send({
            message: "the email and password fields cannot be empty"
        });
        return;
    }
    //check user exist
    User.findOne({ where: { email: req.body.email } }).then((value) => {
        console.log(value);
        console.log(value.dataValues.password)
        if (value == null) {
            res.status(406).send({
                message: "email doesn't exist"
            });
        }
        else {
            // password verification
            let checkPassword = passwordHash.verify(req.body.password, value.dataValues.password)
            
            if (checkPassword == true) {
                res.status(200).json({
                    uuidUser: value.dataValues.uuidUser,
                    //Create a token
                    token: jwt.sign(
                        { uuidUser: value.dataValues.id },
                        'ULTRA_RANDOM_TOKEN_SECRET',
                        { expiresIn: '4h' }
                    )
                });
            }
            else {
                res.status(406).send({
                    message: "Wrong password"
                });
            }
        }
    })
}
//#endregion



