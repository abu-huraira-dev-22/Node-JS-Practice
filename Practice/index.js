const express = require("express");

const app = express()

app.use(express.json())

app.get('/users',(req,res)=>{
    res.json({
        status: true,
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