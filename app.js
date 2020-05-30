'use strict'
const express = require('express')
const app = express()

app.get('/test1', (req, res) => {
  res.json({message: "Hello, I'm AWS lambda function (test1)"});
})

app.get('/test2', (req, res) => {
  res.json({message: "Hello, I'm AWS lambda function (test2)"});
})

// app.listen(3000) // <-- comment this line out from your app

module.exports = app // export your app so aws-serverless-express can use it
