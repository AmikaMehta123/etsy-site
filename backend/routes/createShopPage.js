var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    const shop = req.body.shop;
    const owner = req.body.owner;
    const sale_count = req.body.sale_count;
    const image = req.body.img;
   
    var sql = `INSERT INTO shop_table (shop,owner,sale_count,image) VALUES ('${shop}','${owner}','${sale_count}','${image}')`
    con.query(sql, function (err, result) {
        if (err) 
        {
            console.log("shop details not added");
            res.end("shop details not added");
            throw err;
        }
        else{
        console.log("shop details have been added");
        res.end("shop details have been added");
        }
    });
    });

module.exports = router


