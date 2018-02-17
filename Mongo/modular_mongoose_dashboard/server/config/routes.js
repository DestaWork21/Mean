let mongoose = require("mongoose");
let ChipmunkController = require("../controllers/chipmunk.js");

module.exports = function(app){
    app.get("/",function(req,res){
        ChipmunkController.all(req,res);
    });

    app.get("/chipmunks/new",function(req,res){
        res.render("chipmunk_new");
    })

    app.post("/chipmunks/new",function(req,res){
        ChipmunkController.create(req,res);
    });

    app.get("/chipmunks/:id",function(req,res){
        ChipmunkController.show(req,res);
    });

    app.get("/chipmunks/edit/:id",function(req,res){
        ChipmunkController.edit(req,res);
    });

    app.post("/chipmunks/edit/:id",function(req,res){
        ChipmunkController.update(req,res);
    });



    app.get("/chipmunks/destroy/:id",function(req,res){
        ChipmunkController.destroy(req,res);
    });
}