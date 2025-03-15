require('dotenv').config()
const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/testing',(req,res)=>{
    res.send('yeah nested response')
})

app.get('/login',(req,res)=>{
  res.send('<h1>please enter the username and password<h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})