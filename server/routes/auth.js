const express = require('express'),
      router =new express.Router();

router.post('/signup', (req,res)=>{
    return res.status(200).end();
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