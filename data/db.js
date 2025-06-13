const mySql = require("mysql2")


const connection = mySql.createConnection({
 host:"localhost",
 user:"root",
 password: process.env.MY_PASSWORD,
 database :"university",
 port :3306,
})

connection.connect((err) => {if(err) throw err })
    console.log("db connected");
    

module.exports = connection