const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  //#TODO : check infos
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.folder = require("./folder.model.js")(sequelize, Sequelize);
db.category = require("./category.model.js")(sequelize, Sequelize);
db.exercise = require("./exercise.model.js")(sequelize, Sequelize);
db.workout = require("./workout.model.js")(sequelize, Sequelize);
db.workoutExercise = require("./workoutExercise.model.js")(sequelize, Sequelize);
db.series = require("./series.model.js")(sequelize, Sequelize);
db.seriesPerformed = require("./seriesPerformed.model.js")(sequelize, Sequelize);
db.history = require("./history.model.js")(sequelize, Sequelize);

// Creation of the association between the tables
// Folder to user
db.folder.belongsTo(db.user, { foreignKey: 'uuidAuthor' });
// Exercise to category
db.exercise.belongsTo(db.category, { foreignKey: 'uuidCategory' });
// Exercise to user
db.exercise.belongsTo(db.user, { foreignKey: 'uuidAuthorExercise' });
// Workout to user
db.workout.belongsTo(db.user, { foreignKey: 'uuidAuthorWorkout' });
// Workout to folder
db.workout.belongsTo(db.folder, { foreignKey: 'uuidFolder' });
// workoutExercise to workout
db.workoutExercise.belongsTo(db.workout, { foreignKey: 'uuidWorkout' });
// WorkoutExercise to exercise 
db.workoutExercise.belongsTo(db.exercise, { foreignKey: "uuidExercise" })
// Series to workoutExercise
db.series.belongsTo(db.workoutExercise, { foreignKey: "uuidWorkoutExercise" })
//SeriesPerformed to history (SeriesPerformed)
db.seriesPerformed.belongsTo(db.history, { foreignKey: "uuidHistory" });
//seriesPerformed to series (SeriesPerformed)
db.seriesPerformed.belongsTo(db.series, { foreignKey: "uuidSeries" });
// History to Workout
db.history.belongsTo(db.workout, { foreignKey: "uuidWorkout" })


module.exports = db;