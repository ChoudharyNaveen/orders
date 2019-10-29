const mongoose = require('mongoose');
var orderSchema = mongoose.Schema
const schemaModel = new orderSchema(
    {
        orderDueDate:{
            type:String,
            trim:true,
            required:true
        },
        customerName:{
            type:String,
            trim:true,
            required:true
        },
        customerAddress:{
            type:String,
            trim:true,
            required:true
        },
        customerPhone:{
            type:Number,
            trim:true,
            required:true
        },
        orderTotal:{
            type:Number,
            trim:true,
            required:true
        }
    }
)
module.exports=mongoose.model('Orders',schemaModel);