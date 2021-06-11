const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Folder = sequelize.define("folder", {
        //#TODO check uuid version
        uuidFolder: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        nameFolder: {
            type: Sequelize.STRING(15),
            allowNull: false
        }
    });

    return Folder;
};