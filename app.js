const express = require("express")
const app = express()
const mongoose = require("mongoose")
const db = require("./config/keys_prod").mongoURI
const users = require("./routes/api/users")
const tweets = require("./routes/api/tweets")
const bodyParser = require('body-parser')
const passport = require('passport');
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }
mongoose
.connect("mongodb+srv://admin:XOioGxdakeqY50xz@mern-jhfjz.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true})
.then(()=>console.log("connected to moogoDB"))
.catch((error)=>console.log(error))

app.use(passport.initialize());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json())
require('./config/passport')(passport);


app.get("/", (req,res) => {
    // 
    // console.log(res)
    res.send("Hello World")
})

app.use("/api/users", users)
app.use("/api/tweets", tweets)

const port = process.env.PORT || 5000

app.listen(port, () => {console.log(`Listening on port ${port}`)})