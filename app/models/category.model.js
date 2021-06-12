const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        //#TODO check uuid version
        uuidCategory: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        nameCategory: {
            type: Sequelize.STRING(15),
            allowNull: false
        }
    });

    return Category;
};