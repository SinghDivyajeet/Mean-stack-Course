var express = require('express');

var app = express();
var port = 5000;

//making routes.
// static assests -> public -> styles, images and icons, etc.
// pages -> views
// use and set?
//
app.use(express.static("public")); // to specify to look out static assets in public folder.
app.set("view engine","ejs");

app.get("/",(req,res)=>{
  res.send("HI it's working with nodemon 123")
})

app.get("/dogs",(req,res)=>{
  res.render("dogs")
})

app.get("/dogs/:breed",(req,res)=>{
  var x = req.params.breed;
  res.render("breed",{dogBreed:x});
})


app.listen(port, function(){
    console.log('server running on '+ port);
})



