var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){
    var array = req.body.cart;
    const total = req.body.total;
    const user = req.body.user;
    const orderId = Math.floor(Math.random() * 10000)
    array.forEach(element => {

        const itemid = element.item.id;
        const itemName = element.item.name;
        const quantity = element.quantity;
        const category = element.item.category;
        const shop = element.item.shop;
        const price = element.item.price;
        
        //Insert a record in the "customers" table:
        var sql = `INSERT INTO purchase_table (itemid,user,itemName,quantity,category,shop,price,orderId, total) VALUES (?,?,?,?,?,?,?,?,?)`
        con.query(sql,[itemid,user,itemName,quantity,category,shop,price,orderId, total],function (err, result) {
            if (err) 
            {
                console.log("items have not been created");
                res.end("items have not been created");
                throw err;
            }
            else{
                console.log("Inserted");
                // res.status(200);
                // res.send("Inserted");
            }
        });
    });
    
    res.send("Inserted")
});

module.exports = router


