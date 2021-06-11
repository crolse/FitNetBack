const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        //#TODO check uuid version
        uuidUser: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        email: {
            // 324 is max lenght of email
            type: Sequelize.STRING(324),
            allowNull: false

        },
        password: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    });

    return User;
};