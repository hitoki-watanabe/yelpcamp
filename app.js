var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

   var campgrounds = [
       {name: "Salmon Creek", image: "https://media.wired.com/photos/599b4cfd4fa6fc733c11e30d/master/w_582,c_limit/iStock-820873602.jpg" },
       {name: "Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRg7E5tVxNcEDjnQ8PQO5Ll9NzPe8u99XSLZawOLr3c2koEM_1" },
       {name: "Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdR-XxUnbKCsXBxXoZvyreJ_AYCOvd0BHyNc7ALnK2dZbtcsK-" }
      
       ] ;


app.get("/", function(req,res){
    
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
       
       res.render("campgrounds", {campgrounds : campgrounds});
    
});

app.post("/campgrounds", function(req, res){
//   res.send("You hit post route"); 
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
   res.render("new") ;
});

app.listen(process.env.PORT, process.env.IP, function(){
    
    console.log("The YelpCamp Server Has Started!"); 
});