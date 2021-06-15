module.exports = app => {
    const history = require("../controllers/history.controllers");
    var router = require("express").Router();

    // Create a new history
    router.post("/save", history.create);
    // recover history
    router.get("/recover/:uuidUser", history.recover);

    app.use('/api/history', router);
};