var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    const user = req.body.user;
    //const fav_id = req.body.fav_id;
    const id= req.body.id;
    const shop = req.body.shop;
    const item_name = req.body.item_name;
    const picture = req.body.picture;
    const category = req.body.category;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;

    var sql = `insert into favourite_table(user,id,shop,item_name,picture,category,description,price,quantity) values (?,?,?,?,?,?,?,?,?) `
  
    con.query(sql,[user,id,shop,item_name,picture,category,description,price,quantity],function (err, result) {
        if (err) {
            console.log("error")
            throw err;
        }
        else{
            console.log("row has been updated");
            res.end("Row Added");
        }
    });
    });

module.exports = router