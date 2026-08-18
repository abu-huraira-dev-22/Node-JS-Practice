const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Users = require('./models/UserSchema');

main().catch(err => console.log(err));

app.get('/health',(req,res)=>{
    res.json({
        status:true,
        message:"server is working fine"
    })
})

async function main() {
  await mongoose.connect('mongodb+srv://huraira_db_user:huraira_db_user@cluster0.0mrqd3o.mongodb.net/');
  console.log('Database is connected')
}

app.post('/addUsers', async(req,res)=>{
    const myUser={
        name:"Huraira"
    }
    try {
        const small = await Users.create(myUser);
        res.send({
            status: true,
            message:"User Added Successfully"
        })
    } catch (error) {
        console.log(error, "==>> error")
    }
})



app.listen(5000,()=>{
    console.log("server is working in port number 5000")
})