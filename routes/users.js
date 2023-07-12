const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
    res.send("router is listening")
})

router.get("/new", (req, res) => {
    res.send("this is another route")
})

router.route("/:id").get((req, res) => {
    res.send(`getting the id ${req.params.id}`)
    console.log(req.user)

}).post((req, res) => {
    res.send(`posting the id ${req.params.id}`)
}).delete((req, res) => {
    res.send(`deleting the id ${req.params.id}`)
}).put((req, res) => {
    res.send(`putting the id ${req.params.id}`)
})

const users = [{name: "Ayush"}, {name: "Akhil"}, {name: "Sunny"}, {name: "Milu"}, {name: "Arpit"}, {name: "Arjun"}]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    console.log(id)
    next()
})


module.exports = router