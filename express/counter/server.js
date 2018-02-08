// import { request } from "https";

// require express
var express = require("express");
var app = express();
var path = require("path");
var session = require('express-session');
var bodyParser = require('body-parser');
app.use(session({secret: 'ninjaLevel1'}));  // string for encryption
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: "hideme"}));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
    if(req.session.id !=null || req.session.id != undefined){
        req.session.count++;
    }else{
        req.session.count =0;
    }
    res.render("index", {count:req.session.count});
})
app.get("/counttwo",function(req,res){
    if(req.session.id != null || req.session.id != undefined){
        req.session.count++;
    }else{
        req.session.count = 0;
    }
    res.redirect("/")
})
app.get("/reset",function(req,res){
    if(req.session.id != null || req.session.id != undefined){
        req.session.count = 0;
    }
    res.redirect("/")

})

// tell the express app to listen on port 2010
app.listen(2010, function() {
 console.log("listening on port 2010");
});