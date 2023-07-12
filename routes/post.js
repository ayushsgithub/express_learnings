const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
    res.send("posts are live")
})

router.get("/new", (req, res) => {
    res.send("another post")
})

module.exports = router