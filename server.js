const express = require('express')
const app = express()
const port = 3000
const data = require("./data.json")

app.get('/', (req, res) => {
//   res.status(200).json({name: "Ayush", time: "today", occupation: "software engineer"})
  res.status(200).json(data)
})

app.get('/user', (req, res) => {
  res.status(200).send("hello world")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})