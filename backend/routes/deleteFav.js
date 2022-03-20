var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    const user = req.body.user;
    const fav = req.body.id;
    var sql = `Delete from favourite_table where user = ? and id = ?`
  
    con.query(sql,[user,fav],function (err, result) {
        if (err) {
            console.log("error")
            throw err;
        }
        else{
            console.log("row has been updated");
            res.end("Row Deleted");
        }
    });
    });

module.exports = router