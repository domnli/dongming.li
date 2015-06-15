var express = require('express'),
	app  = express(),
	urlUtil = require('url');

// view engine  - jade
app.set('view engine','jade');
app.set('views', __dirname + '/views');

// static directory
app.use('/static',express.static(__dirname + '/static'));

// router

// GET
app.get('/',function(req,res){
	if(req.hostname == "iloverenyun.com"){
		res.render('lovePage',{title:"can you see"});
	}else{
		res.render('index',{title:"domnli's atoms"});
	}
});

app.get('/xx',function(req,res){
	res.render('lovePage',{title:"can you see"});
});

app.get('/test',function(req,res){
	res.render('test',{title:"can you see"});
});

app.listen(80);