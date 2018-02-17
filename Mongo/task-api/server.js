const express = require("express");
const bodyparser = require("body-parser");
const app       = express();

//middleware
app.use(bodyparser.json())
app.use(express.static( __dirname + '/myFirstAngularApp/dist' ));
//mongoose file
require('./server/config/mongoose');
//routes
require('./server/config/routes')(app);

app.listen(2001, ()=> console.log(`listening on port 2001...`));
