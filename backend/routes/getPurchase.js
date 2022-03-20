var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    const user = req.body.user;

    var sql = 'select * from purchase_table where user = ? order by orderId';
    con.query(sql,[user],function (err, result) {
        if (err) 
        {
            console.log("items not recieved");
            res.end("items not recieved");
            throw err;
        }
        else if(result.length == 0)
        {
            console.log("No Items");
            res.status(204);
            res.end("No Items");
        }
        else {
            console.log("Items Received");
            res.status(200);
            res.send({result});
        }
    });
    });

module.exports = router


