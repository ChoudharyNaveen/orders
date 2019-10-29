require('dotenv').config();
const app=require('./app').listen(8083,()=>
{
    console.log(`The server is running ${app.address().port}`);
});