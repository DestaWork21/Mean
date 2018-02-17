let Chipmunk = require("mongoose").model("Chipmunk");


module.exports = {
    all:function(req,res){
        Chipmunk.find({},function(err,chipmunks){
            if(err){
                res.redirect("/"); 

            }else{

                res.render("index",{chipmunks:chipmunks});

            }

        });

    },



    create:function(req,res){

        let chipmunk = new Chipmunk({

            name:req.body.name,

            age:req.body.age,

            peanuts:req.body.peanuts

        });

        chipmunk.save(function(errs){

            if(errs){

                res.render("chipmunk_new",{errors:chipmunk.errors});

            }else{

                res.redirect("/");

            }

        });

    },



    show:function(req,res){

        let chipmunk = Chipmunk.find({_id:req.params.id},function(err,chipmunk){

            if(err){

                res.redirect("/chipmunks/"+req.params.id);

            }else{

                res.render("chipmunk_show",{chipmunk:chipmunk[0]});

            }

        });

    },



    edit:function(req,res){

        let chipmunk = Chipmunk.find({_id:req.params.id},function(err,chipmunk){

            if(err){

                res.redirect("/chipmunks/"+req.params.id);// Try to find it again. Prolly a terrible idea.

            }else{

                res.render("chipmunk_update",{chipmunk:chipmunk[0]});

            }

        });

    },



    update:function(req,res){

        let chipmunk = Chipmunk.find({_id:req.params.id},function(err,chipmunk){

            chipmunk         = chipmunk[0];

            chipmunk.name    = req.body.name;

            chipmunk.age     = req.body.age;

            chipmunk.peanuts = req.body.peanuts;

            chipmunk.save(function(errs){

                if(errs){

                    res.render("chipmunk_update",{chipmunk:chipmunk,errors:chipmunk.errors});

                }else{

                    res.redirect("/");

                }

            });

        });

    },



    destroy:function(req,res){

        Chipmunk.remove({_id:req.params.id},function(err){

            res.redirect("/");

        });

    }

}