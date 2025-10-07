require('dotenv').config()
const express = require('express') //require module syntax
// or import express from 'express'
const app = express();
const port = 3000

// here app is listening 'Get' request on home('/') route.
app.get('/', (req, res) => {
  res.send('Hello World!').send //in response we will send() reponse
})

app.get('/twitter',(req,res)=>{
    res.send('twitter.com')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please logIn</h1>')
})

app.get('/chai',(req,res)=>{
    res.send('Chai aur code')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
