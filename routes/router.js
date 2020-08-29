const router = require("express").Router();

router.get("/",(req,res)=>{
    res.render("home.ejs");
})

router.get("/action",(req,res)=>{
    res.render("action.ejs");
})

router.get("/adventure",(req,res)=>{
    res.render("adventure.ejs");
})

router.get("/animation",(req,res)=>{
    res.render("animation.ejs");
})

router.get("/comedy",(req,res)=>{
    res.render("comedy.ejs");
})

router.get("/crime",(req,res)=>{
    res.render("crime.ejs");
})

router.get("/documentary",(req,res)=>{
    res.render("documentary.ejs");
})
module.exports = router;