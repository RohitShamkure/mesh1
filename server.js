var express=require("express")
var app=express();

app.get('/',function(req,res){
    res.send("Rohit Bhai ko New Year ki hardik Shubkamnaye")
})
app.listen(4000)
console.log("Server connected")
