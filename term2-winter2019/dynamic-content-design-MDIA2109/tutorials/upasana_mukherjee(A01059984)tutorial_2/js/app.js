var lBut = document.querySelector("#left"),
	rBut = document.querySelector("#right"),
	uBut = document.querySelector("#up"),
	dBut = document.querySelector("#down"),
	zIBut = document.querySelector("#zoomIn"),
	zOBut = document.querySelector("#zoomOut"),
	appBox = document.querySelector("#app");

var x = 50,
	y = 50,
	zoom = 500;

// lBut.addEventListener("mousemove", function() {
// 	x = x-0.5;
// 	appBox.style.backgroundPositionX = x+"%";
// })

// rBut.addEventListener("mousemove", function() {
// 	x = x+0.5;
// 	appBox.style.backgroundPositionX = x+"%";
// })

// uBut.addEventListener("mousemove", function() {
// 	y = y-0.5;
// 	appBox.style.backgroundPositionY = y+"%";
// })

// dBut.addEventListener("mousemove", function() {
// 	y = y+0.5;
// 	appBox.style.backgroundPositionY = y+"%";
// })

zIBut.addEventListener("click", function() {
	zoom = zoom+20;
	appBox.style.backgroundSize = zoom+"%";
})

zOBut.addEventListener("click", function() {
	zoom = zoom-20;
	appBox.style.backgroundSize = zoom+"%";
})

function moveBG(xnum, ynum) {
	x = x+xnum;
	y = y+ynum;

	if(x<0) {
		x = 0;
	}
	if(x>100) {
		x = 100;
	}
	if(y<0) {
		y = 0;
	}
	if(y>100) {
		y = 100;
	}
	appBox.style.backgroundPositionX = x+"%";
	appBox.style.backgroundPositionY = y+"%";
}
