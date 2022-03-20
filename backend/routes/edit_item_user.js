var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){
    const id = req.body.id;
    const name = req.body.name;
    const category = req.body.category;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const picture = req.body.img;
    console.log(req.body);
    var sql = `UPDATE item_table SET category = ?, description = ?, price =?, quantity = ?, name = ?, picture = ? where id = ?`


    con.query(sql,[`${category}`,`${description}`,`${price}`,`${quantity}`,`${name}`,`${picture}`,`${id}`],function (err, result) {
        if (err) {
            console.log("category has not been updated");
            res.end("category has not been updated");
            throw err;
        }
        else {
            console.log("category updated");
            res.end("categoty updated");
        } 
    });
    });

module.exports = router



