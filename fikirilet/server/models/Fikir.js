const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FikirSchema = new Schema({
    isim: String,
    email: String,
    tur: String,
    fikir: String
})

module.exports = mongoose.model("Fikir", FikirSchema);
