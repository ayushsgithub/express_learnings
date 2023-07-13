const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
    res.send("router is listening")
    // console.log(req.query.name);
})

router.get("/new", (req, res) => {
    res.render("users/form")
})


router.post("/", (req, res) => {
    const isValid = true
    if (isValid) {
        const name = req.body.firstName
        users.push({name: name})
        console.log(users[users.length -1])
        // console.log(users.length-1)
        res.redirect(`users/${users.length-1}`)
    }else {
        console.log("Error");
        res.send("Enter your details correctly, go back to users/new")
        setTimeout(() => {
        res.render("users/form")
            
        }, 3000);

    }
})

router.route("/:id").get((req, res) => {
    res.send(`Hi ${req.user.name}, your id is ${req.params.id}`)
    // res.send(`Hi, your id is ${req.params.id}`)

}).post((req, res) => {
    res.send(`posting the id ${req.params.id}`)
}).delete((req, res) => {
    res.send(`deleting the id ${req.params.id}`)
}).put((req, res) => {
    res.send(`putting the id ${req.params.id}`)
})

const users = [{name: "Ayush"}, {name: "Milu"}, {name: "Arpit"}, {name: "Arjun"}]

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    // console.log(id)
    next()
})


module.exports = router