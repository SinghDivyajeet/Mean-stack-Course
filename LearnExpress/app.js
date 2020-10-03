var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios')


var app = express();
var port =  5000;

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

// CRUD application
  // C -> create
  // R -> Read
  // U -> Update
  // D -> Delete

  // Two parts of setting connection to DB from backend.
  //1. Connect DB
  //2. how to recieve data and make it meaningfull on FE.

app.use(express.static("public")); // to specify to look out static assets in public folder.
app.set("view engine","ejs"); // view engine is a engine which views/renders the page, you gotta specify which templating engine you are using.

app.get("/",(req,res)=>{
  res.render("home")
})

var recipesArray= [{
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

// var EmpData  = "select * from empDetails";
app.get("/recipes",(req,res)=>{
  res.render("recipes",{ValueToBePassed:recipesArray});
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
            recipesArray.push(obj);
  res.redirect("recipes");
})
app.get("/github",(req,res)=>{
  res.render("github");
})
app.get("/profile",(req,res)=>{
  res.render("profile");
})
app.post("/search",(req,response)=>{
  var name = req.body.user;
  var url = `https://api.github.com/search/users?q=${name}`
  axios.get(url).then((res)=>{
    console.log(typeof(res.data.items))
    response.render("profile",{data:res.data});
  }).catch((err)=>{
    console.log(err)
    response.render("error");
  })
  
  
})

// {a:b} -> a = the variable which will be passed in ejs file to be used.
      // -> b = is also a variable of the backend that holds data.
app.listen(port, function(){
    console.log('server running on '+ port);
})



