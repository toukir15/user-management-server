const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())
app.use(express.json())

const users = [
    { id: 1, name: "toukir", email: "toukir@gmail.com" },
    { id: 2, name: "tanvir", email: "tanvir@gmail.com" },
    { id: 3, name: "siam", email: "siam@gmail.com" }
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/users", (req, res) => {
    res.send(users)

})

app.post("/users", (req, res) => {
    console.log("post is hitting");
    const newUser = req.body;
    console.log(newUser);
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})