let express  = require("express");

let bodyParse   = require("body-parser");

let mongoose = require("mongoose");

let app      = express();

app.use(express.static(__dirname + "/client/static"));
app.use(bodyParse.urlencoded({ extended: true }));

app.set("views",__dirname+"/client/static/views");

app.set("view engine","ejs");

require("./server/config/mongoose.js");


require("./server/config/routes.js")(app);

let port     = 8000;

app.listen(port, function () {
    console.log("listening on port 8000");
})