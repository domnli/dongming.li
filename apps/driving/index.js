var express = require('express'),
	driving = express();

driving.get('/',function(req,res){
	res.render('index');
});

module.exports = driving;