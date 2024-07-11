const express = require("express");
const cors = require('cors')
const route = require('./route')
const port = 8080
const app = express()
const corsOption = {
    origin:"*"
}

app.use(cors(corsOption))
app.use(express.json());
app.use(route)

app.listen(port, () => {
    console.log(`The server is running on Port ${port}`);
})