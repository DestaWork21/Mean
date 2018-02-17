let User = require("mongoose").model("User");

module.exports = {
    all:function(req,res){
        User.find({},function(err,users){
            res.json(users);
        });
    },

    show:function(req,res){
        User.findOne({name:req.params.name},function(err,user){
            res.json(user);
        });

    },



    create:function(req,res){

        let user = new User({name:req.params.name});

        user.save(function(err){

            if(err){

                res.redirect("/");

            }else{

                res.redirect("/");

            }

        });

    },



    destroy:function(req,res){

        User.remove({name:req.params.name},function(err){

            if(err){

                res.redirect("/");
            }else{
                res.redirect("/");
            }
        })
    }
}