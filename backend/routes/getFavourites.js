var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    const user = req.body.user;
    console.log(user)
    var sql = `Select * from favourite_table where user = ?`
  
    con.query(sql,[user],function (err, result) {
        if (err) throw err;
        console.log("row has been updated");
      
        res.send({result})
        
    });
    });

module.exports = router



