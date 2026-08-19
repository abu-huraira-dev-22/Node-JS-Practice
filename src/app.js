const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./helperFunctions/db')
dotenv.config()

const app= express()

connectDB()

console.log(process.env.PORT)

app.get('/health',(req,res)=>{
    res.status(200).json({
        status:true,
        message: "Server is working fine"
    })
})

// AUTHENTICATION ROUTES
// SignUp // AddUser

// app.use('/api/auth',authenticationRoute)

// USERS ROUTES
// UpdateUser
// GetUser
// DeleteUser

// app.use('/api/auth',usersRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is working at port number ${process.env.PORT}`)
})