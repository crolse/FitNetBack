const { seriesPerformed } = require("../models");
const db = require("../models");
const History = db.history;
const Op = db.Sequelize.Op;
SeriesPerformed = require("./SeriesPerformed.controller")



// #region Create an Exercise
exports.create = (req, res) => {


    const history = {
        uuidWorkout: req.body.uuidWorkout,
    };

    History.create(history)
        .then(data => {
            for (let i = 0; i < req.body.series.length; i++) {
                SeriesPerformed.create(data.uuidHistory, req.body.series[i].uuidSeries, req.body.series[i].weight, req.body.series[i].reps, req.body.series[i].rest)
                console.log(data.uuidHistory, req.body.series[i].uuidSeries, req.body.series[i].weight, req.body.series[i].reps, req.body.series[i].rest)

            }
            res.send("workout save")
        })

};
//#endregion