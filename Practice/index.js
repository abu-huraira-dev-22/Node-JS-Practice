const express = require("express");

const app = express()

app.use(express.json())

app.use((req,res,next)=>{
  console.log('Middleware is working')
  req.requestTime = new Date()
  next()
})

app.get('/users',(req,res)=>{
    res.json({
        status: true,
        data:[
            {name: "Huraira"},
            {name: "Abdul"},
        ],
        time: req.requestTime
    })
})

app.post('/users',(req,res)=>{
    console.log(req.body)
    res.json({
        status:true,
        message:'User Added Successfully'
    })
})

app.patch('/users',(req,res)=>{
    res.json({
        status:true,
        message:"User Field Updated Successfully"
    })
})

app.put('/users',(req,res)=>{
    res.json({
        status:true,
        message:"User Updated Successfully"
    })
})

app.delete('/users',(req,res)=>{
    res.json({
        status:true,
        message:'User Deleted Successfully'
    })
})


app.listen(5000, ()=>{
    console.log('Server is running')
})