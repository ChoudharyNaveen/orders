const mongoose = require('mongoose');
var userSchema = mongoose.Schema
const schemaModel = new userSchema(
    {
        fname:{
            type:String,
            trim:true,
            required:true
        },
        lname:{
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            trim:true,
            required:true
        },
        pswd:{
            type:String,
            trim:true,
            required:true
        }
    }
)
module.exports=mongoose.model('Users',schemaModel);