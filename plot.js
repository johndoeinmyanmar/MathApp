function Plot(){
	this.x = [];
	this.y = [];
	this.strokeStyle = '#ffffff';
	this.lineWidth = 2;
	this.offset = 0;
}

Plot.prototype.draw = function (context, plane){

	context.save();
	var ppi = plane.ppi / plane.zoom_factor;
	var cx = plane.centerX + this.offset;
	var cy = plane.centerY;

	context.beginPath();
	context.lineWidth = this.lineWidth;
	context.strokeStyle = this.strokeStyle;
	context.moveTo(cx+this.x[0]*ppi, cy-this.y[0]*ppi);
	for (let i=0; i< this.x.length -1 ; i++){
		context.lineTo(cx+this.x[i]*ppi, cy-this.y[i]*ppi);	
		context.moveTo(cx+this.x[i]*ppi, cy-this.y[i]*ppi);	
	}

	context.stroke();
	context.restore();
};