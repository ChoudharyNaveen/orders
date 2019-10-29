const express=require('express');
const user=require('../models/user');
const order=require('../models/order')
const mongoose=require('mongoose');
const router=express.Router();
const jwt=require('jsonwebtoken');
var cookie=require('cookie-parser');

// router.get('/register-form',(req,res)=>
// {
//     res.render('signup', {layout: false});
// });
// router.get('/login-form',(req,res)=>
// {
//     res.render('login', {layout: false});
// });
router.post('/registrer',(req,res)=>
{
    var userModel=new user(req.body);
    userModel.save()
    .then(()=>{res.status(200).send("Success");})
    .catch(()=>{res.status(400).send('Fail to insert')})
});
router.post('/order',(req,res)=>
{
    var orderModel=new order(req.body);
    orderModel.save()
    .then(()=>{res.status(200).send("Successfully inserted");})
    .catch(()=>{res.status(400).send("Fail to insert")})
});
router.get('/order',async(req,res) =>
{
    var orders=await order.find();
    res.send(orders);
})
router.get('/edit/order',async(req,res) =>
{
    var orders=await order.find({_id:req.query.id});
    res.send(orders);
})
router.delete('/order',async(req,res) =>
{
    var orders=await order.deleteOne({_id:req.query.id});
    res.send(orders);
})
router.put('/order',async(req,res) =>
{
    var orders=await order.findByIdAndUpdate({'_id':req.query.id},{$set:req.body})
    res.send(orders);
})
router.get('/login-check',async(req,res)=>
{
 var check=await user.findOne({email:req.query.email,pswd:req.query.pswd}).count();
 if(check >= 1) 
 {
       var checkObj = await user.find({email:req.query.email,pswd:req.query.pswd});
       var userDetails={
           id:checkObj[0].id,
           email:checkObj[0].email,
           pswd:checkObj[0].pswd
       }
       jwt.sign(userDetails,'SECRET',(err,token)=>
       {
           res.cookie('token',token);
           res.status(200).json(token);
        })
 }
 else
        res.status(401).send("Plz....register as a user");
})


module.exports=router;