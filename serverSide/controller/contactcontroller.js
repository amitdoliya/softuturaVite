const Contact=require("../models/contact")



exports.insert=async(req,res)=>{
       const{firstname,lastname,number,email,message,img,subject}=req.body
console.log(req.body)
 const record= new Contact({firstname:firstname, lastname:lastname ,number:number,email:email,message:message,img:img,subject:subject})
   await record.save()
  res.json(record)
}
exports.fetchdata=async(req,res)=>{
  const record=await Contact.find()
  res.json(record)
}
exports.updatesinglefetch=async(req,res)=>{
  const id= req.params.abc
  const record=await Contact.findById(id)
  res.json(record)

}



exports.contactupdate =async(req ,res)=>{
const id = req.params.id

const{firstname,lastname,number,email,subject,img,message}=req.body
await Contact.findByIdAndUpdate(id,{firstname:firstname,lastname:lastname,number:number,email:email,subject:subject,img:img,message:message})
res.json({message:"succussfully updated"})
// console.log(id)
// console.log(req.body)
}

exports.contactdelete=async(req,res)=>{
  const id=req.params.id
  console.log(id)
  await Contact.findByIdAndDelete(id)
 res.json({message:"successfuly deleted"})
}