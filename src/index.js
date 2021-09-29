const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
})

const users= [];

app.get('/users',function(req,res){
	res.send(users);
})

app.listen(3000,function()
{console.log('server is listening');
})