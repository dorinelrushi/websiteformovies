const express = require("express");
const router = require("./routes/router");
const path = require("path")

const app = express();

app.set("view engine",'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use("/static",express.static("static"))


app.use("/",router)

app.listen(3000,()=>{
    console.log("3000")
})