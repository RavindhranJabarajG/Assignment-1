var express = require('express');
var app = express();

app.get('/ping',(req,res) => 
{
    res.send("pong");
});

app.listen(4000);