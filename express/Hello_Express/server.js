// Load the express module (Where do you think this comes from?)
var express = require("express");
// invoke var express and store the resulting application in var app
var app = express();
// lets handle the base route "/" and respond with "Hello Express"
// app.get('/', function (request, response) {
//     response.send("<h1>Hello Express</h1>");
// })

// root route
app.get('/', function (req, res){
    res.render('index', {title: "my Express project"});
  });
  // route to process new user form data:
app.post('/users', function (req, res){
    //code to add user to db goes here!
    // redirect the user back to the root route. 
  // All we do is specify the URL we want to go to:
  res.redirect('/');

  })
  // require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));


// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

// route to process new user form data:
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body);
    // set the name property of session.
    req.session.name = req.body.name;
    console.log(req.session.name);

    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/')
});

app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});
// new code:
var session = require('express-session');

// more new code:
app.use(session({secret: 'codingdojorocks'}));  // string for encryption


// notice that the function is app.get(...) why do you think the function is called get?
// Tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})

