const exp = require("constants");
const express = require("express");
const path = require("path");

const routeHome = require("./src/routes/home")




const app = express();



app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/',routeHome)


app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");



app.listen(3000, () => {
    console.log("oi");
})

