let express  = require("express");

let bodyParse   = require("body-parser");

let mongoose = require("mongoose");

let app      = express();

let port     = 8900;

app.use(express.static(__dirname + "/static"));
app.use(bodyParse.urlencoded({ extended: true }));

app.set("views",__dirname+"/views");

app.set("view engine","ejs");



//Well, I didn't use /mongoose.

mongoose.connect("mongodb://localhost/mongoose_dashboard");

mongoose.Promise = global.Promise;
// You know Alvin, Simon and Theodore will be in here.

let Chipmunk = mongoose.model("Chipmunk",new mongoose.Schema({
    name:{type:String,required:true,minlength:1,maxlength:255},
    age:{type:Number,required:true,min:1,max:100},
    peanuts:{type:Number,required:true,min:0,max:255}
},{timestamps:true}));

app.get("/",function(req,res){
    Chipmunk.find({},function(err,chipmunks){
        if(err){
            res.redirect("/"); 

        }else{
            res.render("index",{chipmunks:chipmunks});
        }
    });

});

app.get("/chipmunks/new",function(req,res){
    res.render("chipmunk_new");
})

app.post("/chipmunks/new",function(req,res){
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
});

app.get("/chipmunks/:id",function(req,res){
    let chipmunk = Chipmunk.find({_id:req.params.id},function(err,chipmunk){
        if(err){
            res.redirect("/chipmunks/"+req.params.id);
        }else{
            res.render("chipmunk_show",{chipmunk:chipmunk[0]});
        }
    });
});

app.get("/chipmunks/edit/:id",function(req,res){
    let chipmunk = Chipmunk.find({_id:req.params.id},function(err,chipmunk){
        if(err){
            res.redirect("/chipmunks/"+req.params.id);
        }else{
            res.render("chipmunk_update",{chipmunk:chipmunk[0]});
        }
    });
});

app.post("/chipmunks/edit/:id",function(req,res){
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
});

app.get("/chipmunks/destroy/:id",function(req,res){
    Chipmunk.remove({_id:req.params.id},function(err){
        res.redirect("/");
    });
});


app.listen(port, function () {
    console.log("listening on port 8900");
})