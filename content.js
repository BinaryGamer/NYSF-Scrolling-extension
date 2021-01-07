let scroll = document.getElementsByClassName('x-scroll-scroller-vertical');
document.onwheel = function(event) {
  	//console.log(event.deltaY);
	for (scroller of scroll) {
		var ScrollLength = scroller.style.transform.length;
		console.log(ScrollLength);
		var yVal = scroller.style.transform.substring(17, ScrollLength-8);
		//console.log(yVal);
		var y = event.deltaY;
		//console.log(y);
		yVal = Number(yVal);
		console.log(yVal, "Current y Val");
		y = y/2
		yVal = yVal - y;
		console.log(yVal, "Future y Val");
		yVal.toString;
		//console.log(yVal);
		console.log("translate3d(0px, " + yVal + "px, 0px)");
		scroller.style.transform = "translate3d(0px, " + yVal + "px, 0px)";
}
}
//Alert("Pog");

//743