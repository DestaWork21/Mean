
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require("path");

app.use(express.static(__dirname + "/static"));

app.use(session({
    secret: 'secrepassword',
    proxy:true,
    resave:false,
    saveUninitalized:true
}));  // string for encryption
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views'); 
// app.set("views", path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    let dojos ={
        locations:[
            "D.C.",
            "Montain View",
            "Seattle",
            "LA"
        ],
        languages:[
            "C",
            "C++",
            "Java",
            "Web Front",
            "Python",
        ]
    };
    res.render('index', {dojos: dojos});
  });
  // route to process new user form data:
  app.post("/result",function(req,res){

    let result = {
        name:req.body.name,
        location:req.body.loc,
        language:req.body.lang,
        comment:req.body.comment

    }

    res.render("result",{result}); 

})
app.get("/goback",function(req,res){
    res.redirct("/")
});

// Tell the express app to listen on port 8000
app.listen(2013, function () {
    console.log("listening on port 2013");
})

