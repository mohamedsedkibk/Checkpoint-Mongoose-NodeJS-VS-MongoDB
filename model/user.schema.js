const mongoose= require('mongoose')

const Schema= mongoose.Schema

const userSchema= new Schema({
    firstname:String ,
    lastname: String ,
    age:Number
})
 
 const user= mongoose.model('user', userSchema) 
 
 module.exports = user;





 