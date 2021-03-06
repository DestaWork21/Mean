let mongoose  = require("mongoose");
let fs        = require("fs");
let path      = require("path");
let modelPath = path.join(__dirname,"./../models");
mongoose.connect("mongodb://localhost/old_api");
mongoose.Promise = global.Promise;

fs.readdirSync(modelPath).forEach(function(file) {
    if(file.indexOf(".js") >= 0) {
        require(modelPath+"/"+file);
    }
});