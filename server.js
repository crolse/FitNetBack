const express = require("express");
const cors = require("cors");
const noc = require('no-console')  // require package
const app = express();
noc();


app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routes declaration
require("./app/routes/user.routes")(app);
require("./app/routes/folder.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
db.sequelize.sync();

// delete and resynchronise tables if necessary
/*db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});*/
