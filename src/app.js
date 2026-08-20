const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./helperFunctions/db')
const authRouter = require('./Routes/AuthRoutes')
dotenv.config()

const app= express()
app.use(express.json())

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

app.use('/api/auth',authRouter)

// USERS ROUTES
// UpdateUser
// GetUser
// DeleteUser

// app.use('/api/auth',usersRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is working at port number ${process.env.PORT}`)
})