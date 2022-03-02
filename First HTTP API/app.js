const express = require('express')
const createError = require('http-errors')
const app = express()
const port = 3000


app.get('/',(req,res) => {
    res.send("Welcome to our first HTTP API!")
})

app.use(function(req,res,next){
    if (!req.user) return next(createError(404, 'Page not found!'))
    next()
})


app.listen(port,() => {
    console.log(`Our first HTTP API listening on port ${port}`)
})