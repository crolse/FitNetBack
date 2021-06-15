const { seriesPerformed } = require("../models");
const db = require("../models");
const History = db.history;
const Op = db.Sequelize.Op;
const sequelize = db.sequelize
const { QueryTypes } = require('sequelize');
SeriesPerformed = require("./SeriesPerformed.controller")



// #region Create history
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

//#region Recover history for a user 
exports.recover = (req, res) => {
    sequelize.query("SELECT nameWorkout , histories.createdAt , SUM(reps * weight) As WorkLoad  FROM histories JOIN seriesperformeds on seriesperformeds.uuidHistory = histories.uuidHistory JOIN workouts on workouts.uuidWorkout = histories.uuidWorkout WHERE uuidAuthorWorkout ='" + req.params.uuidUser.toString() + "'order by histories.createdAt ", { type: QueryTypes.SELECT }).then(data => { res.send(data) })
}
//#endregion


//#region Recover history for a user 
/*SELECT nameWorkout , histories.createdAt , SUM(reps * weight) As WorkLoad  FROM histories
JOIN seriesperformeds on seriesperformeds.uuidHistory = histories.uuidHistory
JOIN workouts on workouts.uuidWorkout = histories.uuidWorkout*/