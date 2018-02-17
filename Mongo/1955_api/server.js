let express  = require("express");
let bodyParse   = require("body-parser");
let mongoose = require("mongoose");
let app      = express();

app.use(express.static(__dirname + "/client/static"));

app.use(bodyParse.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js");
require("./server/models/User.js");
app.listen(8080, function () {
    console.log("listening on 8080");
})