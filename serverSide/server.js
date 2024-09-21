const express=require('express')//function
const cors= require("cors")
const app =express()//module
app.use(express.json())
 app.use(cors())

const apiRouter=require('./routers/api.js')

const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/softfuturavite')



app.use('/api' ,apiRouter)
app.listen(5000,console.log("server is connected  port  on 5000"))
