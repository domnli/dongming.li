define(function(require,exprots,module){
	var Motion = require("trajectory/motion"),
		looper = require("trajectory/util/looper"),
		cpi = require("trajectory/util/cpi"),
		face = require("trajectory/pattern/face/liuyi_170_161_6081"),
		random = require("trajectory/util/random");

	setOffSet(face.coors,window.innerWidth/2-face.width/2,window.innerHeight/2-face.height/2);
	var canvas = cpi.createCanvasFullScreen(),ctx = canvas.getContext("2d"),
		motion = new Motion({canvas:canvas,atomsORcoors:face.coors}),isRandom = false;

	motion.setVel(30);

	motion.on("rest",function(){
		if(isRandom){
			isRandom = false;
			this.switchShape(face.coors);
		}else{
			isRandom = true;
			randomDest(this.getAtoms());
		}
	});

	function setOffSet(coors,x,y){
	 	if(!isNaN(x)){
	 		var i = 0, dest;
	 		y = isNaN(y) ? 0 : y;
	 		for(var i = 0;i<coors.length;i++){
	 			dest = coors[i];
	 			coors[i].x = dest.x+x;
	 			coors[i].y = dest.y+y;
	 		}
	 	}
	}

	function randomDest(atoms){
		b²≤x²+y²≤a²
		x*x<= a*a-y*y;
		var mx,my,x,y,r1,r2;
		(x-mx)*(x-mx) + (y-my)*(y-my) <= r2*r2
		(x-mx)*(x-mx) + (y-my)*(y-my) >= r1*r1
		(x-mx)*(x-mx) <= Math.pow(r2,2) - Math.pow((y-my),2)
		x <= Math.sqrt(Math.pow(r2,2) - Math.pow((y-my),2)) + mx;
		for(var i=0;i<atoms.length;i++){
			atoms[i].set('destination',{
				x:random(0,canvas.width),
				y:random(0,canvas.height)
			});
		}
	}

	function clear(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
	}
	function next(){
		motion.next();
	}
	looper.add([clear,next]);
	looper.run();
});