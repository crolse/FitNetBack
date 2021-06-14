module.exports = app => {
    const folder = require("../controllers/folder.controller");
    var router = require("express").Router();

    // Create a new folder
    router.post("/create", folder.create);
    // delete a folder
    router.delete("/delete", folder.delete);
    // recover all folder
    router.get("/recover/:uuidUser", folder.recover);

    app.use('/api/folder', router);
};