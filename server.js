//dependencies
const express = require("express");
const path = require("path");

//Sets up the Express App
const app = express();
var PORT = process.env.PORT || 3000;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

//Routes
require("./routes/apiRoute")(app);
require("./routes/html.route")(app);
//Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));