import express from 'express'
import config from './config'

const app = express()
const router = express.Router()

app.use("/",express.static("./index.html"))

app.listen(config.port, ()=> {
    console.log(`Example app listening on port ${config.port}!`)
});