const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/kullanici", (req, res) => {
    res.send(
        {
            message: "Hello React"
        }
    )
})

app.listen(3001)