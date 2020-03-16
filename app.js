const express = require("express")
const app = express()
const mongoose = require("mongoose")
const db = require("./config/keys").mongoURI
const users = require("./routes/api/users")
const tweets = require("./routes/api/tweets")
const bodyParser = require('body-parser')
const passport = require('passport');


mongoose
.connect(db,{useNewUrlParser:true})
.then(()=>console.log("connected to moogoDB"))
.catch((error)=>console.log(error))

app.use(passport.initialize());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json())
require('./config/passport')(passport);


app.get("/", (req,res) => {
    // debugger
    // console.log(res)
    res.send("Hello World")
})

app.use("/api/users", users)
app.use("/api/tweets", tweets)

const port = process.env.PORT || 5000

app.listen(port, () => {console.log(`Listening on port ${port}`)})