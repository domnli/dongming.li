var express = require('express'),
	driving = require('./apps/driving/'),
	main  = express();

// view engine  - jade
main.set('view engine','jade');

// static directory
main.use('/static',express.static(__dirname + '/static'));

// router
main.use('/driving',driving);

// GET
main.get('/',function(req,res){
	if(req.hostname == "iloverenyun.com"){
		res.render('lovePage',{title:"can you see"});
	}else{
		res.render('index',{title:"domnli's atoms"});
	}
});

main.get('/xx',function(req,res){
	res.render('lovePage',{title:"can you see"});
});

main.get('/test',function(req,res){
	res.render('test',{title:"can you see"});
});

main.get('/fun/liuyi',function(req,res){
	res.render('fun',{title:"酷炫闪图"})
});

main.listen(80);