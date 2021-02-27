
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require('./network/routes')

app.use(bodyParser.json())
router(app)


app.listen(8080,()=>{
    console.log('Using http://localhost:8080');
})
