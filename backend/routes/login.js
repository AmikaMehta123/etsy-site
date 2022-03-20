var app = require('express');
const con = require('../pool');
const router = app.Router();

router.post('/', function(req,res){

    const name = req.body.name;
    const password = req.body.password;
    //const city = req.body.city;
  
    var sql = `SELECT
     * FROM login_table WHERE name= ? and password= ?`;

    con.query(sql,[`${name}`,`${password}`], function (err, result) {
        // console.log({name},{password});
        if (err) 
        {
            console.log("invalid credentials");
            res.end("invlid credentials");
            throw err;
        }
        else if (result.length == 0 || password != result[0].password) 
            {
                console.log("invalid credentials");
                res.status(401)
                res.end("invlid credentials");
            }
        else
        {
            // console.log(result);    
            console.log("succesfully logged in");
            res.status(200);
            res.send(name);
        }    
        
    });
    });

module.exports = router



