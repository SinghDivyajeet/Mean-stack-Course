var express = require('express');
var bodyParser = require('body-parser');
var fetch = require("node-fetch");
const { response } = require('express');

var app = express();
var port = 5000;

app.use(bodyParser.urlencoded({extended:true}))
//making routes.
// static assests -> public -> styles, images and icons, etc.
// pages -> views
// use and set?

// Cross origin resource sharing -> CORS
// Same-origin policy -> SOP
// how to find usable data from api call. -> urlencoded, JSON.

// SQL database -> Structured query language
    // ACID Properties -> sole reason to use databases.

// when to use SQL Dbs and NOSQL Dbs?

//What is SQL.

app.use(express.static("public")); // to specify to look out static assets in public folder.
app.set("view engine","ejs"); // view engine is a engine which views/renders the page, you gotta specify which templating engine you are using.

app.get("/",(req,res)=>{
  res.render("home")
})

var recipes = [{
  name:"Burger",
  imgUrl:""
},{
  name:"Pizza",
  imgUrl:""
},{
  name:"Lasagna",
  imgUrl:""
},{
  name:"Mojito",
  imgUrl:""
}];
app.get("/recipes",(req,res)=>{
  res.render("recipes",{recipes:recipes});
})

app.get("/dogs/:breed",(req,res)=>{
  var x = req.params.breed;
  res.render("breed",{dogBreed:x});
})

app.post("/addRecipe",(req,res)=>{
  var obj = {
            name:req.body.recipeName,
            imgUrl:"",
            };
  recipes.push(obj);
  res.redirect("/recipes");
})
app.get("/github",(req,res)=>{
  res.render("github");
})
app.get("/profile",(req,res)=>{
  res.render("profile");
})
app.post("/search",(req,res)=>{
  var name = req.body.user;
  fetch("https://api.github.com/search/users?q=divyajeet")
  .then(res=>{
    console.log(res.body)
  }).catch(err=>{
    console.log(err)
  })
  
  res.render("profile");
})

app.listen(port, function(){
    console.log('server running on '+ port);
})



