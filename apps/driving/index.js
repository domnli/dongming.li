var express = require('express'),
	driving = express();

driving.set('views',__dirname+'/views');
driving.get('/',function(req,res){
	res.render('index');
});

module.exports = driving;