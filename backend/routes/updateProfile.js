var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    const name = req.body.name;
    const dob = req.body.dob;
    const city = req.body.city;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const gender = req.body.gender;
    const country = req.body.country;
    const picture = req.body.img;
    var sql = `UPDATE user_table SET dob = ?, city= ?, email = ?, phone = ?, address = ?, gender=?, country=?, picture = ? WHERE name = ?`


    con.query(sql,[dob,city,email,phone,address,gender,country,picture,name],function (err, result) {
        
        if(err)
        { 
        console.log("row has not been updated");
        res.end("row not updated");
        throw err;
        }
        else if(result.length == 0)
        {
            console.log("row not updated");
            res.status(401);
            res.end("row not updated");
        }
        else{
            console.log(result);
            res.status(200);
            res.send("Updated");
            
        }
    });
    });

module.exports = router



