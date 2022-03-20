var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    var item_ids = []
    var shops = []
    var quantity = []
    var inStockQuantity = []
    req.body.forEach(element => {
        item_ids.push(element.item.id)
        shops.push(element.item.shop)
        quantity.push(element.quantity)
        inStockQuantity.push(element.item.quantity)
        // console.log(element.item);
    });
    
    for (let index = 0; index < item_ids.length; index++) {
        var q = inStockQuantity[index] - quantity[index]

        var itemSql = `Update item_table SET quantity = ? where id = ?`;
        
        console.log(q)
        con.query(itemSql,[q,item_ids[index]],function (err, result) {
            if(err) { 
                console.log("row has not been updated");
                res.end("row not updated");
                throw err;
            } else {
                console.log("Item Updated - " + item_ids[index]);
            }
        });
        console.log(shops[index])
        var shopSql = `Select * from shop_table where shop = ?`;
        con.query(shopSql,[shops[index]],function (err, result) {
            if(err) { 
                console.log("row has not been updated");
                res.end("row not updated");
            } else {
                console.log(result);
                var sc = result[0].sale_count + quantity[index];
                var updateSql = `Update shop_table set sale_count = ? where shop = ?`
                con.query(updateSql,[sc,shops[index]],function (err, result) {
                    if(err) { 
                        console.log("row has not been updated");
                        res.end("row not updated");
                    } else {
                       console.log("Row Updated - " + shops[index]);
                    }
                });
                
            }
        });
    }
   
    res.end("DONE")
    });

module.exports = router



