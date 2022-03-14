const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000

mongoose.connect("mongodb+srv://jjones:CS4800@cluster0.bddb9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String
})

userSchema.methods.getInfo = function getInfo(){
    console.log(this.name)
    console.log(this.password)
    console.log(this.email)
}

const user = mongoose.model('User', userSchema)
const testUser = new user({name: 'Bob', password: 'abc123', email: 'bob_bobson@bobmail.bob'})

testUser.save()

app.get('/',(req,res) => {
    res.send("This is the home page of the website. When not signed in, it will give users the option to sign in or create an account.\nIf signed in, it will redirect to the user portal.")
})

app.get('/signin',(req,res) => {
    res.send("This is where the sign-in page will go. For now, it just logs some dummy user information from our MongoDB database in the console.")   
    testUser.getInfo()    
})

app.get('/register',(req,res) => {
    res.send("This is where new users will create their accounts.")
})

app.get('/myCalendar', (req,res) => {
    res.send("This will be the user's home page, where they can view their calendar and upcoming events. Only accessible via sign-in.")
})

app.get('/myCalendar/events', (req,res) => {
    res.send("This page will display all of the upcoming events on the user's calendar and give them the option of creating new events.")
})

app.get('myCalendar/settings', (req,res) => {
    res.send("This page will display account and calendar settings options for the user.")
})

app.listen(port,() => {
    console.log(`Node.js API listening on port ${port}`)
})

module.exports = express