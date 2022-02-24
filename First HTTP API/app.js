const express = require('express')
const app = express()
const port = 3000

app.get('/home',(req,res) => {
    res.send("Welcome to our first HTTP API!")
})

app.listen(port,() => {
    console.log(`Our first HTTP API listening on port ${port}`)
})