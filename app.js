const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/views/date");


const app = express();
var  itemS = ["Buy Food", "Cook Food", "Eat Food"];
var workItem = [];
var day = "";
var item = "";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    var day = date.getDate();
    res.render("lists", {listTitle: day, newItem: itemS  } );
});

app.post("/", function(req,res){
    var title = req.body.button;
    if(title == "work" ){
        item =req.body.input;
        workItem.push(item);
        res.redirect('/work');
    } else{
     item = req.body.input;
     itemS.push(item);
     res.redirect("/");
    }
});

app.get("/work", function(req,res){
    var day = date.getDate();
    // if()
    res.render("lists", {listTitle: "work", newItem: workItem  } );
   
})
app.listen(4500, function(){
    console.log("Server is running on port 4500");
});