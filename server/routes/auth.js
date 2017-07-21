const express = require('express'),
      router =new express.Router(),
      connection = require('../config/db');

router.post('/signup', (req,res)=>{
    var body=req.body;
    var username=body.username;
    var name=body.name;
    var surname=body.surname;
    var password=body.password;

    var result='';
    var query='insert into user(username,name,surname,password,createdat) values (?,?,?,?,now())';
    connection.query(query,[username, name, surname, password], (err,rows)=> {
        if (err) throw err

        rows.affectedRows > 0 ? result='basarili' : result='basarisiz';
        return res.send(result);
    });
    

    //return res.status(200).end();
});

router.post('/login',(req,res)=>{
    //res.send('login');
    var body=req.body;
    var username=body.username;
    var password=body.password;
    //console.log(username+' - '+password);
    var result='';
    var query='select * from user where username = (?) and password = (?)';
    connection.query(query,[username, password], (err,rows)=> {
        if (err) throw err

        rows[0] ? result='basarili' : result='basarisiz';
        return res.send(result);
    });
});

module.exports = router;