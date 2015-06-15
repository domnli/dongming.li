define(function(require,exports,module){
	var Motion = require("trajectory/motion"),
		looper = require("trajectory/util/looper"),
		cpi = require("trajectory/util/cpi"),
		CN = require("trajectory/pattern/xx/loveyou"),
		EN = require("trajectory/pattern/xx/loveyouEng"),
		FR = require("trajectory/pattern/xx/loveyouFr"),
		DE = require("trajectory/pattern/xx/loveyouDe"),
		KR = require("trajectory/pattern/xx/loveyouKr"),
		JP = require("trajectory/pattern/xx/loveyouJp");

	var canvas = cpi.createCanvasFullScreen(),
		ctx = canvas.getContext("2d"),
		motion = new Motion({canvas:canvas,ctx:ctx}),
		shapes = [CN,EN,FR,DE,KR,JP],
		shapeIndex = 0;
	motion.setAtoms(CN.coors);
	motion.setOffset(canvas.width/2 - CN.width/2,canvas.height/2 - CN.height/2);
	motion.randomCoors();
	motion.setVel(4);
	motion.on("rest",function(){
		shapeIndex++;
		if(shapes.length == shapeIndex){
			shapeIndex = 0;
		}
		motion.switchShape(shapes[shapeIndex].coors);
		motion.setOffset(canvas.width/2 - shapes[shapeIndex].width/2,canvas.height/2 - shapes[shapeIndex].height/2);
	});
	looper.add([function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
	},function(){
		motion.next();
	}]);
	looper.run();
});