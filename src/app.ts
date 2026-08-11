import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
const app = express()
dotenv.config()

app.use(express.json())
// app.use(cors())

app.get('/', (req, res)=>{
    res.json({success:true, mesage:"welcome"})
})


export default app

