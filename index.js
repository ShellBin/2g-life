const config = require('./config')
const g = require('./controller/general')
const path = require('path')
const express = require('express')
const ejs = require('ejs')

const app = express()
const router = express.Router()

app.set('views', path.join(__dirname, './views'))
app.engine('html', ejs.__express)
app.set('view engine','html')

app.get("/", (req, res) => {
    res.render('index.ejs', {
        time: g.getTime()
    })
})

app.listen(config.port, ()=> {
    console.log(`2G_Life is listening on port ${config.port}!`)
});

