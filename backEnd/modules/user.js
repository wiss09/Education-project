// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema= new Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    confirmPassword:String,
    phone:Number,
    role:String,
    experience:Number,
    course:String,
    img:String
    
    
})
const user=mongoose.model('User' ,userSchema)
module.exports=user  