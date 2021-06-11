const db = require("../models");
const Folder = db.folder;
const Op = db.Sequelize.Op;



// #region Create a folder
exports.create = (req, res) => {
    // Verification of fields
    if (!req.body.nameFolder || !req.body.uuidUser) {
        res.status(400).send({
            message: "the first name and password fields cannot be empty"
        });
        return;
    }

    const folder = {
        nameFolder: req.body.nameFolder,
        uuidAuthor: req.body.uuidUser,
    };

    //Verification folder exist

    Folder.findOne({ where: { nameFolder: folder.nameFolder, uuidAuthor: folder.uuidAuthor } })
        .then(data => {
            if (data != null) {
                res.status(406).send({
                    message: "A folder with the same name already exist"
                });
            }
            else {
                // Save a user in database
                Folder.create(folder)
                    .then(data => {
                        res.send(data);
                    })
            }
        })
};
//#endregion

//#region Delete a folder
exports.delete = (req, res) => {
    // Verification of fields
    if (!req.body.nameFolder || !req.body.uuidUser) {
        res.status(400).send({
            message: "Empty fields"
        });
        return;
    }
    const folder = {
        nameFolder: req.body.nameFolder,
        uuidAuthor: req.body.uuidUser,
    };

    //Verification email exist

    Folder.findOne({ where: { nameFolder: folder.nameFolder, uuidAuthor: folder.uuidAuthor } })
        .then(data => {
            if (data == null) {
                res.status(406).send({
                    message: "Folder was not found"
                });
            }
            else {
                // delete a folder in database
                Folder.destroy({ where: { nameFolder: folder.nameFolder, uuidAuthor: folder.uuidAuthor } })
                    .then(data => {
                        res.status(200).send({
                            message: "File deleted"
                        });
                    })
            }
        })


}
//#endregion

//#region Recover all folder of a User
exports.recover = (req, res) => {
    // Verification of fields
    if (!req.body.uuidUser) {
        res.status(400).send({
            message: "Empty fields"
        });
        return;
    }


    // Recover all folder of a user
    Folder.findAll({ where: { uuidAuthor: req.body.uuidUser } })
        .then(data => {
            res.send(data);
        })
};
//#endregion

