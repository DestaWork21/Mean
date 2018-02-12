
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var mongoose = require("mongoose");


app.use(express.static(__dirname + "/static"));
mongoose.connect('mongodb://localhost/basic_mongoose');
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views'); 

app.set('view engine', 'ejs');

var UserSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength:2},
    age: {type: Number, min: 1, max: 150}
}, {timestampls: true})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.get('/', function (req, res){
    User.find({}, function(err, users){
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        res.render('index');

    })   
    
  })

  // route to process new user form data:
app.post("/users",function(req,res){
    console.log("POST DATA", req.body);
      // create a new User with the name and age corresponding to those from req.body
    var user = new User({name:req.body.name, age:req.body.age});

// Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
        // if there is an error console.log that something went wrong!
        if(err) {
          console.log('something went wrong');
          red.render('index', {errors:user.errors})
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a user!');
          res.redirect('/');
        }
      })
    })
    
// app.get("/goback",function(req,res){
//     res.redirct("/")
// });
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.

   
// Tell the express app to listen on port 8000
app.listen(8900, function () {
    console.log("listening on port 8900");
})

