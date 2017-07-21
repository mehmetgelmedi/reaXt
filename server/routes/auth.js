const express = require('express'),
      router =new express.Router(),
      connection = require('../config/db'),
      passwordHash = require('password-hash');

router.post('/signup', (req,res)=>{
    var body=req.body;
    var username=body.username;
    var name=body.name;
    var surname=body.surname;
    var password=body.password;
    var hashedPassword=passwordHash.generate(password);

    var result='';
    var query='insert into user(username,name,surname,password,createdat) values (?,?,?,?,now())';
    connection.query(query,[username, name, surname, hashedPassword], (err,rows)=> {
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
    var result='kullanici bulunamadi';
    var hash='select password from user where username = (?)';
    connection.query(hash,[username], (err,rows)=> {
        if (err) throw err
        
        if(rows[0])
            passwordHash.verify(password,rows[0].password) ? result='basarili' : result='basarisiz';
        return res.send(result);
    });
});

module.exports = router;