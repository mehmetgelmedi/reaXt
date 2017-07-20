const express = require('express'),
      router =new express.Router();

router.post('/signup', (req,res)=>{
    var body=req.body;
    var username=body.username;
    var name=body.name;
    var surname=body.surname;
    var password=body.password;

    return res.send(username+' - '+name+' - '+surname+' - '+password);

    //return res.status(200).end();
});

router.post('/login',(req,res)=>{
    //res.send('login');
    var body=req.body;
    var username=body.username;
    var password=body.password;
    console.log(username+' - '+password);
    //console.log(body);
    var r='';
    if(username=='meg' && password=='123')
        r='basarili '+username+' - '+password+' '+body;
    else
        r='basarisiz '+username+' - '+password+' '+body;
    
    return res.send(r);
});

module.exports = router;