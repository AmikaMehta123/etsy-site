var app = require('express');
const con = require('../pool');
const router = app.Router();

router.get('/', function(req,res){

    var sql = 'select * from item_table';
    con.query(sql, function (err, result) {
        if (err) 
        {
            console.log("items not recieved");
            res.end("items not recieved");
            throw err;
        }
        else if(result.length == 0)
        {
            console.log(result[0]);
            console.log("items have been recieved");
            res.end("items have been recieved");
        }
        else {
            console.log(result);
            res.send({result});
        }
    });
    });

module.exports = router


