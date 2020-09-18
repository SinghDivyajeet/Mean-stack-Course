var express = require('express');
var bodyParser = require('body-parser');
var Axios = require('axios');



var app = express();
var port = 5000;

app.use(bodyParser.urlencoded({extended:true}));

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

// What are different kinds of DBs? -> relations, non-relational, graph Dbs, DO db etc.

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
app.get("/profiles",(req,res)=>{
  res.render("profiles");
})
app.post("/search",(req,res)=>{
  var name = req.body.user;
  Axios.get(`https://api.github.com/search/users?q=${name}`)
  .then((result)=>{
    res.render("profiles",{res:result.data})
 
  })
  .catch((err)=>{
    console.log(err)
  })
})
app.post("/profile",(req,res)=>{
 console.log(req)
})
app.listen(port, function(){
    console.log('server running on '+ port);
})



