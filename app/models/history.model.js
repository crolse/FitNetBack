const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const History = sequelize.define("history", {
        //#TODO check uuid version
        uuidHistory: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });

    return History;
};