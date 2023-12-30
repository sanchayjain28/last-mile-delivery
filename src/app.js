import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
const app=express()


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "1600kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import organisationRouter from './routes/organisation.routes.js'
app.use("/organisation",organisationRouter)
export {app}