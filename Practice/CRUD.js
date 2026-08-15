const express =require('express')
const app = express()

app.use(express.json())

const users = []

app.get('/',(req,res)=>{
    res.json({
        status:true,
        message:"All Users Added Successfully",
        data:users
    })
})

app.post('/',(req,res)=>{
    const data = req.body
    users.push(data)
    res.json({
        status:true,
        message:'User Added Successfully'
    })
})

app.listen(3000,()=>{
    console.log('Server is running...')
})