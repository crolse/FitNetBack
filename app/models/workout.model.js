const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Workout = sequelize.define("workout", {
        //#TODO check uuid version
        uuidWorkout: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        nameWorkout: {
            type: Sequelize.STRING(15),
            allowNull: false
        }
    });

    return Workout;
};