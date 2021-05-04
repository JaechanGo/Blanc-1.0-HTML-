
function drawInit() {
	var x = 0, c=0;
	canvasContext.clearRect(0,0,width,height);
		var barWidth = (width/1024)*2.5;
		var barHeight = height/4;
		for (var i =0; i < 1024; i++) {
			canvasContext.fillStyle = 'hsla(' + ((i/2) + Math.floor(c)) + ', ' + 100 + '%,' + 60 + '%,' + (0.5 + barHeight / 512) + ')';
		canvasContext.fillRect(x, (height/2)-(barHeight/2), barWidth,barHeight/2);
		canvasContext.fillStyle = 'hsla(' + ((i/2) + Math.ceil(c)) + ', ' + 80 + '%,' + 60 + '%,' + (0.2)+ ')';
		canvasContext.fillRect(x, (height/2) + (barHeight/2)+5, barWidth, -barHeight/2);
		canvasContext.fill();

		x += barWidth + 1;

		c += 0.5;
		}
}

drawInit();


