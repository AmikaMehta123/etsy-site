var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    const name = req.body.name;
    
    //Insert a record in the "customers" table:
    var sql = `SELECT * FROM user_table WHERE name= ?`
    con.query(sql,`${name}`,function (err, result) {
        if (err) 
        {
            console.log("user data not avialable");
            res.end("user data not avialable");
            throw err;
        }
        else if(result.length == 0)
        {
            console.log("invalid data");
            res.status(401)
            res.end("invlid data");
        }
        else{
            console.log(result);
            res.send({result});
        }
    });
    });

module.exports = router


