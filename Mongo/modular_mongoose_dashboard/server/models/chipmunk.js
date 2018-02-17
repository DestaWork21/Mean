let mongoose = require("mongoose");

let Chipmunk = mongoose.model("Chipmunk",new mongoose.Schema({
    name:{type:String,required:true,minlength:1,maxlength:255},
    age:{type:Number,required:true,min:1,max:100},
    peanuts:{type:Number,required:true,min:0,max:255}
},{timestamps:true}));