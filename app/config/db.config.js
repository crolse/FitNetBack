//Information to connect to the database
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "fitnet",
    dialect: "mysql",
    // #TODO check conf 
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };