const mongoosee=require('mongoose')


const regSchema=new mongoosee.Schema({
    username:String,
    password:String,
    createDate:{type:Date,default:new Date()},
    status:{type:String,default:'Active'},
  
})




module.exports=mongoosee.model('reg',regSchema)
