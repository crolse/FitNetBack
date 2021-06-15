const db = require("../models");
const Category = db.category;

// #region Create category
exports.create = (req, res) => {


    const category = {
        nameCategory: req.body.nameCategory,
    };

    Category.create(category)
        .then(data => {
            res.send(data)
        })

};
//#endregion

// #region recover category
exports.recover = (req, res) => {


    Category.findAll().then(data => res.send(data))

};
//#endregion