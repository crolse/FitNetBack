const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const SeriesPerformed = sequelize.define("seriesPerformed", {
        uuidSeriesPerformed: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        
        weight: {
            // We can put a weight of 9,5kg
            type: Sequelize.DOUBLE,
            allowNull: false

        },
        reps: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        // Time in seconde
        rest: {
            type: Sequelize.INTEGER,
            allowNull: false
        }


    });

    return SeriesPerformed;
};