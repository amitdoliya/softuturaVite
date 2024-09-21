const reg=require("../models/reg")



exports.fetchdatas=async(req,res)=>{
   const record=await reg.find()
   res.json(record)
 }
 exports.updatesinglefetch=async(req,res)=>{
   const id= req.params.xyz
   const record=await reg.findById(id)
   res.json(record)
   
 
 }
exports.register=async(req,res)=>{
      console.log(req.body)

      const {username ,password}=req.body
       const usercheck=await reg.findOne({username:username})
        if(usercheck==null){
         
      const record=new reg({username:username, password:password }) 
         await record.save()
          res.json(record)
        }else{
          res.json({message:'Username already exist'})
         }
      }
 exports.login=async(req,res)=>{
        // console.log(req.body)
        const {username ,password}=req.body
        const record=await reg.findOne({username:username})
        console.log(record)


        if(record!==null){
          if(record.password==password){
     res.json(record)
          }else{
             res.json({message:'Wrong credetails!'})
          }
       }else{
          res.json({message:'Wrong credetails!'})
       }
      }

exports.adminpannel=async(req,res)=>{
       console.log("body" ,req.body)
       const {username ,password}=req.body
       const record=await reg.findOne({username:username})
       console.log(record)
      if(record!==null){
         if(record.password==password){
    res.json(record)
      console.log(record)
         }else{
            res.json({message:'Wrong credetails!'})
         }
      }else{
         res.json({message:'Wrong credetails!'})
      }
     }
     
     exports.regdelete=async(req,res)=>{
      const id=req.params.id
      console.log(id)
      await reg.findByIdAndDelete(id)
   
     res.json({message:"successfuly deleted"})
   
    }
    exports.regupdate=async(req,res)=>{
      
      const id=req.params.id
      //console.log(req.params.id)
      const record=await reg.findById(id)
      //console.log(record)
      let newstatus=null
      if(record.status=='active'){
          newstatus='suspended'
      }else{
          newstatus='active'
      }
      await reg.findByIdAndUpdate(id,{status:newstatus})
      res.redirect('/user')
     }




     
     exports.adminpannel=(req,res)=>{
        console.log(req.body)
      }
      exports.regdelete=async(req,res)=>{
       const id=req.params.id
       console.log(id)
       await reg.findByIdAndDelete(id)
    
      res.json({message:"successfuly deleted"})
    
     }
     exports.regupdate=async(req,res)=>{
       
       const id=req.params.id
       //console.log(req.params.id)
       const record=await reg.findById(id)
       //console.log(record)
       let newstatus=null
       if(record.status=='active'){
           newstatus='suspended'
       }else{
           newstatus='active'
       }
       await reg.findByIdAndUpdate(id,{status:newstatus})
       res.redirect('/user')
      }