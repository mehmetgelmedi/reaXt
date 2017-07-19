const express = require('express'),
      router =new express.Router();

router.post('/signup', (req,res)=>{
    return res.status(200).end();
});

router.post('/login',(req,res)=>{
    //res.send('login');
    return res.status(200).end();
});

module.exports = router;