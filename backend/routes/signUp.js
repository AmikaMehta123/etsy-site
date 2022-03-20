var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    var sql = `INSERT INTO login_table (name,email,password) VALUES ('${name}','${email}','${password}')`
  
    con.query(sql,function (err, result) {
        if (err) throw err;
        console.log("row has been updated");
        res.end("row updated");
    });

    var sql = `INSERT INTO user_table (name,email) VALUES ('${name}','${email}')`
  
    con.query(sql,function (err, result) {
        if (err) throw err;
        console.log("row has been updated");
        res.end("row updated");
    });
    

    });

module.exports = router



