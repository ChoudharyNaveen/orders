const express=require('express');
const log=require('./loggers/log');
const routes=require('./routes/index');
const path=require('path');
const exphbs  = require('express-handlebars');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');
const cors = require('cors')
const app=express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors(corsOptions));

mongoose.connect(process.env.DATABASE_ENV).then(
    () => { console.log("DATABASE CONNECTED")},
    err => { console.log("FAIL TO CONNECT") }
  );

//app.use(log);
var originsWhitelist = [
  'http://localhost:8083',
  'http://localhost:4200'
];
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}
//here is the magic
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/',routes);
module.exports=app;