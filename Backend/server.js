import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import admin from './routers/admin.js'

//app confing
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

//api end points
app.use('/api/admin',admin)

app.listen(port,()=>
console.log("Server start at port",port)
)