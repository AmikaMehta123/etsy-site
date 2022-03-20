var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    const shop = req.body.shop;
    const name = req.body.name;
    const picture = req.body.img;
    const category = req.body.category;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;
    
    //Insert a record in the "customers" table:
    var sql = `INSERT INTO item_table (shop,name,picture,category,description,price,quantity) VALUES ('${shop}','${name}','${picture}','${category}','${description}','${price}','${quantity}')`
    con.query(sql,function (err, result) {
        if (err) 
        {
            console.log("items have not been created");
            res.end("items have not been created");
            throw err;
        }
        else if(result.length == 0)
        {
            console.log("items have been created");
            res.status(401)
            res.end("items have been created");
        }
        else{
            console.log(result);
            res.status(200);
            res.send({result});
        }
    });
    });

module.exports = router


