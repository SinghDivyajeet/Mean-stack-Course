const express = require("express");
const mysql = require('mysql')
const bodyParser = require("body-parser");

const app  = express();

app.use(bodyParser.urlencoded({ extended: true}))
// app.use(express.static('public'));
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"BMW@mysql",
    database:"twitter"
})

db.connect((err)=>{
    if(!err)
    console.log("all good bud! -> DB running")
});


const port = 4000;

app.use(express.static('public'))
app.set("view engine","ejs");


app.get('/',(req,res)=>{
    var query = `select * from tweets;`;
    var data;
    db.query(query,(err,results)=>{
        if(err){
            console.log("you fucked up!")
        }
        else{
            res.render("homePage",{data:results})
        }
    })
    // console.log("data->",data)
})


app.get("/tweet",(req,res)=>{
    res.render("postTweet");
})

app.post("/postTweet",(req,res)=>{
    var data = req.body;
    data["time"] = new Date();
    var sql = `insert into tweets set ?`;
    db.query(sql,data,(err,results)=>{
        if(err){
            console.log("Tweet not saved!")
        }
        else{
            console.log("Tweet saved!")
        }
    })
    setTimeout(() => {
        res.redirect("/");
    }, 1000);

})

app.listen(port, function(){
    console.log(`App running on ${port}`)
})