var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    
    const shop = req.body.shop;
    const name = req.body.name;
    const picture = req.body.picture;
    const category = req.body.category;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;

    var sql = `UPDATE item_table SET shop = ?, picture= ?, category = ?, description = ?, price = ?, quantity=? WHERE name = ?`


    con.query(sql,[shop,picture,category,description,price,quantity,name],function (err, result) {
        
        if(err)
        { 
        console.log("item has not been updated");
        res.end("item has not been updated");
        throw err;
        }
        else if(result.length == 0)
        {
            console.log("item has not been updated");
            res.status(401);
            res.end("item has not been updated");
        }
        else{
            console.log(result);
            res.status(200);
            res.end("item has been updated");
            res.send({result});
            
        }
    });
    });

module.exports = router



