const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Series = sequelize.define("series", {
        //#TODO check uuid version
        uuidSeries: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        weight: {
            // 324 is max lenght of email
            type: Sequelize.DOUBLE,
            allowNull: false

        },
        reps: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        rest: {
            type: Sequelize.INTEGER,
            allowNull: false
        }


    });

    return Series;
};