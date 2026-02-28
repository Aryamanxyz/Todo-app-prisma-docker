import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import path,{dirname} from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoroutes.js'
import authMiddleware from './middleware/authMiddleware.js'

const app=express()
const PORT=process.env.PORT||5000

const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)

app.use(express.static(path.join(__dirname,'../public')))
app.use(express.json())


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})
//routes
app.use('/auth' , authRoutes)
app.use('/todos' ,authMiddleware, todoRoutes)

app.listen(PORT,()=>{
    console.log(`server has started on port : ${PORT}`)
})