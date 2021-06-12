const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Exercise = sequelize.define("exercise", {
        //#TODO check uuid version
        uuidExercise: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        nameExercise: {
            type: Sequelize.STRING(15),
            allowNull: false
        }
    });

    return Exercise;
};