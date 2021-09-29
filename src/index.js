const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
})

const users= [];

app.get('/users',function(req,res){
	res.send(users);
})

users.push({id:0, username:'Marco'}); // create user marco
app.post('/users',function(req,res){
	res.send(users);
})
app.get('/users/:id',function(req,res){
	res.send(users);
})
app.listen(3000,function()
{console.log('server is listening');
})