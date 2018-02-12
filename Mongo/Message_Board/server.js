let express  = require("express");
let bodyParse   = require("body-parser");
let mongoose = require("mongoose");
let app      = express();
app.use(express.static(__dirname + "/static"));
app.use(bodyParse.urlencoded({ extended: true }));
app.set("views",__dirname+"/views");
app.set("view engine","ejs");

mongoose.connect("mongodb://localhost/message_board");
mongoose.Promise = global.Promise;
let Schema   = mongoose.Schema;

let ObjectId = Schema.Types.ObjectId;

let User = mongoose.model("User",new Schema({
    name:{type:String,required:true,minlength:1,maxlength:255},
    posts:[{type:ObjectId,ref:"Post"}],
    comments:[{type:ObjectId,ref:"Comment"}]
},{timestamps:true}));

let Post = mongoose.model("Post",new Schema({
    text:{type:String,required:true,minlength:1,maxlength:255},
    comments:[{type:ObjectId,ref:"Comment"}],
    _user:{type:ObjectId,ref:"User"}
},{timestamps:true}));

let Comment = mongoose.model("Comment",new Schema({
    text:{type:String,required:true,minlength:1,maxlength:255},
    _post:{type:ObjectId,ref:"Post"},
    _user:{type:ObjectId,ref:"User"}
},{timestamps:true}));



app.get("/",function(req,res){
    User.find({})
    .populate("posts")
    .populate("comments") 

    .exec(function(err,users){
        res.render("index",{users:users});
    })

});

app.post("/post",function(req,res){
    let user   = new User({name:req.body.name});
    let post   = new Post({text:req.body.post});
    post._user = user._id;
    post.save(function(err){
        user.posts.push(post);
        user.save(function(err){
            res.redirect("/");
        });
    });
});

app.post("/comment/:id",function(req,res){
    Post.findOne({_id:req.params.id},function(err,post){
        let user      = new User({name:req.body.name});
        let comment   = new Comment({text:req.body.comment});
        comment._post = post._id;
        comment._user = user._id;            
        comment.save(function(err){
            user.comments.push(comment);
            post.comments.push(comment);
            user.save(function(err){
                post.save(function(err){
                    res.redirect("/");
                });
            });
        });
    });
})
app.listen(8080, function () {
    console.log("listening on 8080");
})