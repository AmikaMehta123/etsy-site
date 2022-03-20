var app = require('express');
const con = require('./../pool');
const router = app.Router();

router.post("/",(req,res) =>{

    var shop_name = req.body.shop_name;

    var sql = `select * from shop_table where shop = ('${shop_name}')`

    con.query(sql, function (err, result) {
        if (err) 
        {
            console.log("shop name already exists");
            console.log(err)
            //throw err;
        }
        else if(result.length ==0)
            {
                res.status(200);
                console.log("you can create")
                res.send("can create a shop")
            }
            else{
                res.status(202)
                res.send("cannot create")
            }

        
    });
});

module.exports = router
