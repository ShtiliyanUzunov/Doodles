var canvas = document.getElementById("canvas"),
			context = canvas.getContext('2d'),
			width = canvas.width,
			height = canvas.height;
			
var stroke = function (r, g, b) {
	context.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
};

var floor = Math.floor,
	random = function (boundary) {
		return Math.random() * boundary;
	};

var fill = function (r, g, b) {
	context.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
};

var point = function (x, y) {
	context.beginPath();
	context.arc(x, y, 0.3, 0, Math.PI*2 );
	context.fill();
	//context.stroke();
	context.closePath();
};