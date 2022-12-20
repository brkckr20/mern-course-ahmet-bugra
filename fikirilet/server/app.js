const express = require("express");
const cors = require("cors");
const app = express();
// const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());


app.get("/kullanici", (req, res) => {
    res.send(
        {
            message: "Hello React"
        }
    )
});

app.post("/fikirkaydet", (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

// app.post()

app.listen(3001)