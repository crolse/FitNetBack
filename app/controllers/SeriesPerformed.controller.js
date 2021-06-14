const db = require("../models");

const SeriesPerformed = db.seriesPerformed
const Op = db.Sequelize.Op;

// #region Create an Workout
exports.create = (uuidHistory, uuidSeries, weight, reps, rest) => {

    const seriesPerformed = {
        uuidHistory: uuidHistory,
        uuidSeries: uuidSeries,
        weight: weight,
        reps: reps,
        rest: rest
    };
    console.log("series Performed" + seriesPerformed)


    SeriesPerformed.create(seriesPerformed)
};
//#endregion