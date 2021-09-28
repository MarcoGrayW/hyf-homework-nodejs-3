const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
})

const users=[
	{name:'Marco'},
    {name:'Giovanni'},
    {name:'Lupita'},
	{name:'Miriam'}
]

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: users
	})
})

app.listen(3000,function()
{console.log('server is listening');
})