const mysql = require("mysql");

const baglanti = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysqltest" //olusturulduktan sonra eklenir

});


/* veri tabanı bağlantısı olusturmak */
baglanti.connect(function (err) {
    if (err) throw err;

    /* veritabani olusturma sorgusu */
    /* const sorgu = "CREATE DATABASE nodemysqltest";
    baglanti.query(sorgu, function (err) {
        if (err) throw err;
        console.log("DB created");
    }); */

    /* tablo olusturma */
    /* const sorgu = `CREATE TABLE 
                    musteriler (
                        NAME varchar(30), 
                        ADDRESS varchar(75)    
                    )`;
    baglanti.query(sorgu, function (err) {
        if (err) throw err;
        console.log("Tablo oluşturuldu");
    }) */


    /* id'li tablo olusturma */
    /* const sorgu = `CREATE TABLE OGRENCILER (
                                            ID INT AUTO_INCREMENT PRIMARY KEY, 
                                            NAME varchar(30), 
                                            ADRESS varchar(50)
        )`;
    baglanti.query(sorgu, function (err) {
        if (err) throw err;
        console.log("tablo olustu.");
    }) */


    /* tabloya field ekleme */
    /* const sorgu = `ALTER TABLE OGRENCILER ADD COLUMN TCNO CHAR(11)`
    baglanti.query(sorgu, function (err) {
        if (err) throw err;
        console.log("tablo guncellendi")
    }) */


    /* insert sorgusu */
    /* const sorgu = `INSERT INTO OGRENCILER (NAME,ADRESS,TCNO) VALUES ("MUHAMMED","İSTANBUL AVRUPA YAKASI","12312312312")`;
    baglanti.query(sorgu, function (err) {
        if (err) throw err;
        console.log("veri girildi");
    }) */

    /* çoklu insert sorgusu */
    /* const sorgu = `INSERT INTO OGRENCILER (NAME,ADRESS,TCNO) VALUES ?`;
    const values = [
        ["ahmet", "izmir", "12341234123"],
        ["doğu", "manisa", "12341234113"]
    ];
    baglanti.query(sorgu, [values], function (err) {
        if (err) throw err;
        console.log("veriler girildi");
    }) */

    /* select sorgusu */
    baglanti.query(`SELECT * FROM OGRENCILER`, function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
    });
})