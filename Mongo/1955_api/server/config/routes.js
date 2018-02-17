let mongoose       = require("mongoose");
let UserController = require("../controllers/UserController.js");

module.exports = function(app){
    app.get("/",function(req,res){
        UserController.all(req,res);
    });

    app.get("/:name",function(req,res){
        UserController.show(req,res);
    });

    app.get("/new/:name",function(req,res){
        UserController.create(req,res);
    })
    app.get("/remove/:name",function(req,res){
        UserController.destroy(req,res);
    })
}