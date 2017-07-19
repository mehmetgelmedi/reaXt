const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      authRoutes= require('./routes/auth'),
      app=express();


app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname,'..','build')));
app.use(bodyParser.urlencoded({extended : false}));
app.use('/auth', authRoutes);

app.get('*',(req,res)=>{
    res.sendfile(path.resolve(__dirname,'..','build','index.html'));
});
module.exports = app;