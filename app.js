const express = require ("express");
const bodyParser = require ("body-parser");
const js = require('ejs');
const date = require (__dirname+"/date.js");    
//  as we have a local module which was created by us so we have to call like this  

const app = express();
let items =["Make Food","Cook Food","Eat Food"];    
let workItems = []; 

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

// """home page"""
app.get ("/",function(req,res){

 let day = date.getDate();      
  //  date.getDate();   calling the date function in the main page  ...   
  res.render("list",{listTitle:day,newListItems:items});

});
// """home page"""

  app.post("/",function(req,res){
    console.log(req.body);

    let item = req.body.newItem; 

    if (req.body.button === "workList")
        {
      workItems.push(item);
      res.redirect("/work")
        } 
    else{
      items.push(item);
      res.redirect("/");
        }
})

app.get("/work",function(req,res){
  res.render("list",{listTitle: "workList", newListItems: workItems});
  
})
app.get("/about",function(req,res){
  res.render("about");
});
// """creation of server"""
app.listen(4000,function()
{
   console.log( "The server is working fine at channel no.4000 " );
});