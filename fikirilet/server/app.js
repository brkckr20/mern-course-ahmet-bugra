const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();

//model import
const Fikir = require("./models/Fikir");
const Admin = require("./models/Admin");

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);


mongoose.connect("mongodb://localhost:27017/fikirilet", (err) => {
    if (err) throw err;
    console.log("Db connection");
});


app.get("/kullanici", (req, res) => {
    res.send(
        {
            message: "Hello React"
        }
    )
});

app.post("/fikirkaydet", async (req, res) => {
    const { adSoyad, email, fikirTuru, aciklama } = req.body;
    await Fikir.create({
        isim: adSoyad,
        email,
        tur: fikirTuru,
        fikir: aciklama
    }, err => {
        if (err) res.sendStatus(400);
        res.sendStatus(200);
    })
})

app.post("/giris", async (req, res) => {
    const { username, password } = req.body;

})


// app.post("/adminolustur", async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const resp = await Admin.create({
//             username, password
//         })
//         res.send(resp);
//     } catch (error) {

//     }
// })

app.listen(3001)