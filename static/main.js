/**
	trajectory 轨迹
	
*/
define(function(require,exprots,module){
	var Motion = require("trajectory/motion"),
		looper = require("trajectory/util/looper"),
		qr = require("trajectory/pattern/qr/qr_100_3325"),
		cpi = require("trajectory/util/cpi"),
		hello = require("trajectory/pattern/hello/hello_260_75_500"),
		random = require("trajectory/util/random");
	// qr
	// qr = face;
	var canvas = cpi.createCanvasFullScreen(),ctx = canvas.getContext("2d");
	var qrm = new Motion({canvas:canvas,atomsORcoors:qr.coors}),
		hellom = new Motion({canvas:canvas,atomsORcoors:hello.coors});
	qrm.randomCoors();
	hellom.randomCoors();
	qrm.setVel(500);
	hellom.setVel(50);
	//qrm.setOffset(0,canvas.height - qr.height);
	hellom.setOffset(canvas.width/2-hello.width/2,canvas.height/2-hello.height/2);
	qrm.once("rest",function(){
		looper.add(function(){
			hellom.next();
		});
		qrm.on('mouseover',function(x,y){
			var atoms = this.getAtoms();
			for(var i = 0;i<atoms.length;i++){
				dest = atoms[i].get("destination");
				atoms[i].set('vel',random(1,100));
				atoms[i].set("destination",{x:x,y:y});
			}
		});
	});

	canvas.onmousemove=function(e){
		qrm.emit('mouseover',e.x,e.y);
	};

	looper.add([function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
	},function(){
		qrm.next();
	}]);
	looper.run();
});