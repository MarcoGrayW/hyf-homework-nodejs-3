const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
})

let users= [];

app.get('/users',function(req,res){
	res.send(users.map((item) => (
		{id: item}
	)));
});

app.post('/user',function(req,res){
	const user =  users.length;
	users.push(user); // create user 
	res.status(200).json({id: users[user]});
})
app.get('/user/:id',function(req,res){
	console.log(req.params.id)
	res.send({id: users[Number(req.params.id)]});
})
app.listen(3000,function()
{console.log('server is listening');
})