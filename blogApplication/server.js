const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
require("dotenv").config();
const mongoose = require('mongoose')
const passport = require("passport");
const path = require('path')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

const MONGO_URL = "mongodb://localhost:27017/blog-db"

mongoose.connect(MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=> {console.log("Mongo Connection is Successful")})
    .catch(err => console.log(err))

mongoose.set('useFindAndModify',false);
mongoose.Promise = global.Promise

app.use(passport.initialize())
require('./middleware/passport')(passport)

const users = require('./routes/api/user')
const posts = require('./routes/api/post')
app.use("/api/users/",users)
app.use("/api/posts/",posts)

app.listen(PORT, () => {
    console.log(`server is up and running on port ${PORT}`)
})
