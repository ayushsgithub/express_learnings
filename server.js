const express = require('express')
const app = express()
const port = 3000
const data = require("./data.json")
app.set("view engine", "ejs")

const userRouter = require("./routes/users")
const postRouter = require("./routes/post")

app.use(logger)
app.use("/users", userRouter)
app.use("/posts", postRouter)


app.get('/', (req, res) => {
  res.render("index", {text: "Ayush's"})
})

// To download files , the actual file has been deleted.
// app.get('/download', (req, res) => {
//     res.download("./file.txt")
// })

app.get('/ayush', (req, res) => {
  res.redirect("https://ayushsport.netlify.app")
})

app.get('/new/:id', (req, res) => {
  res.status(200).send(`hello world ${req.params.id}`)
})

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})