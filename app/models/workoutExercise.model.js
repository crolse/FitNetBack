const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const WorkoutExercise = sequelize.define("workoutExercise", {
        //#TODO check uuid version
        uuidWorkoutExercise: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
    });

    return WorkoutExercise;
};