


const mongoose=require('mongoose')

const contactSchema=new mongoose.Schema({
   firstname:String,
   lastname:String,
   number:Number,
     email:String,
     img:String,
     message:String , 
     subject : {
      type: String ,
      Option: ['Project', 'Support', 'Other', 'SelectOption']
   }

})

module.exports=mongoose.model('contact',contactSchema)

