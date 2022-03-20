var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    const image = req.body.img;
    const shop = req.body.shop;
    console.log(req.body)
    var sql = 'Update shop_table set image = ? where shop = ?';
    con.query(sql,[image, shop],function (err, result) {
        if (err) 
        {
            console.log("items not recieved");
            res.end("items not recieved");
            throw err;
        }
        else {
            // console.log("Items Received");
            // res.status(200);
            res.send("Edited Image")
        }
    });
    });

module.exports = router


