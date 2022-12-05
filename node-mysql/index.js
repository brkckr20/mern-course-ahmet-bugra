const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",

});


/* veri tabanı bağlantısı olusturmak */
connection.connect(function (err) {
    if (err) throw err;
    console.log("Bağlantı başarılı")
})