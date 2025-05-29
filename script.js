const express=require("express");
const app=express();
const path=require("path");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine","ejs");
app.get("/",(req,res)=>
{
    res.sendFile(path.join(__dirname,"entry.html"));
});
app.post("/login",(req,res)=>
{
    let {username,password}=req.body;
    res.render("family.ejs",{username,password});


});
app.get("/forgot",(req,res)=>
{
    res.sendFile(path.join(__dirname,"forgot.html"));
});
app.post("/login/details",(req,res)=>
{   let {username,father,fathernum,fathermail,momname,momnum,mommail,sibname,sibnum,sibmail,address}=req.body;
    res.render("details.ejs",{username,father,fathernum,fathermail,momname,momnum,mommail,sibname,sibnum,sibmail,address})
});
app.get("/register",(req,res)=>
{
     res.sendFile(path.join(__dirname,"register.html"));
});
app.listen(8080,()=>
{
    console.log("server is running");
});

