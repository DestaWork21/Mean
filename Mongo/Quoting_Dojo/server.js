let express    = require("express");
let bodyParser = require('body-parser');
let mongoose   = require("mongoose");
 
let app        = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost/quoting_dojo");
mongoose.Promise = global.Promise;



let User = mongoose.model("User",new mongoose.Schema({ 

    name:{type:String,required:true,minlength:1,maxlength:255},

    quote:{type:String,required:true,minlength:1,maxlength:255} // One quote per user for now it seems.

},{timestamps:true}));

app.get("/",function(req,res){

    res.render("index",{errors:req.errs});

});

app.get("/quotes",function(req,res){
    User.find({},function(err,users){
        if(err){
            res.redirect("/");
        }else{
            res.render("quotes",{users:users});
        }

    })

});

app.post("/quotes",function(req,res){

    let user = new User({
        name:req.body.name,
        quote:req.body.quote
    });
    user.save(function(err){
        if(err){
            req.errs = user.errors; // Better than rendering here...
            console.log(req.errs);
            res.redirect("/");

        }else{

            req.errs = "";

            res.redirect("/quotes");

        }

    })
});
app.listen(8080, function () {
    console.log("listening on port 8080");
})