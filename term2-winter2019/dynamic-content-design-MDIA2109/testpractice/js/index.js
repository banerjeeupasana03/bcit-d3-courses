var bg1 = document.getElementById("ch1");
var bg2 = document.getElementById("ch2");
var bg3 = document.getElementById("ch3");
var zoomDiv = document.getElementById("zoom");
// function changeImage() {
//   bg1.style.backgroundImage = "url(imgs/i1.jpg)";
// }
 var bg1Button = document.querySelector("#buttons > button:nth-child(2)");
 var bg2Button = document.querySelector("#buttons > button:nth-child(3)");
 var bg3Button = document.querySelector("#buttons > button:nth-child(4)");
 var bg4Button = document.querySelector("#buttons > button:nth-child(5)");
 var btnState;
bg1Button.addEventListener("click", function(){
  bg1.style.backgroundImage = "url(imgs/i1.jpg)";
  bg2.style.backgroundImage = "url(imgs/i2.jpg)";
  bg3.style.backgroundImage = "url(imgs/i3.jpg)";
  btnState = 1;
});

bg2Button.addEventListener("click", function(){
  bg1.style.backgroundImage = "url(imgs/i4.jpg)";
  bg2.style.backgroundImage = "url(imgs/i5.jpg)";
  bg3.style.backgroundImage = "url(imgs/i6.jpg)";
  btnState = 2;
});

bg3Button.addEventListener("click", function(){
  bg1.style.backgroundImage = "url(imgs/i7.jpg)";
  bg2.style.backgroundImage = "url(imgs/i8.jpg)";
  bg3.style.backgroundImage = "url(imgs/i9.jpg)";
  btnState = 3;
});


bg4Button.addEventListener("click", function(){
  bg1.style.backgroundImage = "url(imgs/i10.jpg)";
  bg2.style.backgroundImage = "url(imgs/i11.jpg)";
  bg3.style.backgroundImage = "url(imgs/i12.jpg)";
  btnState = 4;
});

bg1.addEventListener("mouseenter", function() {
  var img = bg1.style.backgroundImage ;
  // zoomDiv.style.backgroundImage = ""
  console.log(img);

  if(img == 'url("imgs/i1.jpg")') {
    zoomDiv.style.backgroundImage = 'url("imgs/i1.jpg")';
  }
  else if(img == 'url("imgs/i4.jpg")') {
    zoomDiv.style.backgroundImage = 'url("imgs/i4.jpg")';
  }
  else if(img == 'url("imgs/i7.jpg")') {
    zoomDiv.style.backgroundImage = 'url("imgs/i7.jpg")';
  }
  else if(img == 'url("imgs/i10.jpg")') {
    zoomDiv.style.backgroundImage = 'url("imgs/i10.jpg")';
  }
});

bg2.addEventListener("mouseenter", function() {
  var img = bg2.style.backgroundImage;
  zoomDiv.style.backgroundImage = img;

});

bg3.addEventListener("mouseenter", function() {
  var img = bg3.style.backgroundImage;
  zoomDiv.style.backgroundImage = img;

});

var makeBgbtns = document.getElementsByName("make_bg");
var arrayOfBtns = Array.from(makeBgbtns);
var makeBgbtn = arrayOfBtns[0];
var appDiv = document.getElementById("app");

makeBgbtn.addEventListener("click", function() {
  var zoomDivBgImg = zoomDiv.style.backgroundImage;
  appDiv.style.backgroundImage = zoomDivBgImg;
});

var makeResetBtns = document.getElementsByName("reset");
var arrayOfReset = Array.from(makeResetBtns);
var makeResetBtn = arrayOfReset[0];

makeResetBtn.addEventListener("click", function(){
  var zoomDivBgImg = zoomDiv.style.backgroundImage;
  appDiv.style.backgroundImage = "none";
});

var showAppBtn = document.querySelector("#menu button[name='show_app']");
showAppBtn.addEventListener("click", function() {
  var mainDiv = document.getElementById("main");
  mainDiv.style.display = "flex";
});

var hideAppBtn = document.querySelector("#menu button[name='hide_app']");
hideAppBtn.addEventListener("click", function() {
  var mainDiv = document.getElementById("main");
  mainDiv.style.display = "none";
});

zoomDiv.addEventListener("click", function() {
  var zoomControlDiv = document.getElementById("zoomcontrols");
  zoomControlDiv.style.display = "flex";
  zoomControlDiv.style.flexDirection = "column";
});

var plusBtn = document.querySelector("#zoomcontrols button[name='plus']");
plusBtn.addEventListener("click", function() {
  var initialWidth;
  var initialHeight;
  if(zoomDiv.style.backgroundSize.length == 0){
    initialWidth = Math.round(zoomDiv.clientWidth);
    initialHeight = Math.round(zoomDiv.clientHeight);
    zoomDiv.style.backgroundSize = initialWidth + "px" + " " + initialHeight + "px";
  }
  var backgroundInitialValue = zoomDiv.style.backgroundSize;
  var sizeArr = backgroundInitialValue.split(" ");
  var widthStr = sizeArr[0];
  var heightStr = sizeArr[1];
  var widthInt = parseInt(widthStr.replace("px", ""));
  var heightInt = parseInt(heightStr.replace("px", ""));
  var newWidth = Math.round(widthInt + (widthInt * 0.1));
  var newHeight = Math.round(heightInt + (heightInt * 0.07));
  zoomDiv.style.backgroundSize = newWidth + "px" + " " + newHeight + "px";
});

var minusBtn = document.querySelector("#zoomcontrols button[name='minus']");
minusBtn.addEventListener("click", function() {
  var initialWidth;
  var initialHeight;
  if(zoomDiv.style.backgroundSize.length == 0){
    initialWidth = Math.round(zoomDiv.clientWidth);
    initialHeight = Math.round(zoomDiv.clientHeight);
    zoomDiv.style.backgroundSize = initialWidth + "px" + " " + initialHeight + "px";
  }
  var backgroundInitialValue = zoomDiv.style.backgroundSize;
  var sizeArr = backgroundInitialValue.split(" ");
  var widthStr = sizeArr[0];
  var heightStr = sizeArr[1];
  var widthInt = parseInt(widthStr.replace("px", ""));
  var heightInt = parseInt(heightStr.replace("px", ""));
  var newWidth = Math.round(widthInt - (widthInt * 0.1));
  var newHeight = Math.round(heightInt - (heightInt * 0.07));
  zoomDiv.style.backgroundSize = newWidth + "px" + " " + newHeight + "px";
});

var nextBtn = document.querySelector("#buttons button[name='next']");
var prevBtn = document.querySelector("#buttons button[name='previous']");
var bgBtnArr = [bg1Button, bg2Button, bg3Button, bg4Button];

nextBtn.addEventListener("click", function(){
  if(btnState == 1){
    bg2Button.click();
  } else if(btnState == 2){
    bg3Button.click();
  } else if(btnState == 3){
    bg4Button.click();
  } else if(btnState == 4){
    bg1Button.click();
  }
});

prevBtn.addEventListener("click", function() {
  if(btnState == 4){
    bg3Button.click();
  }
  else if(btnState == 3){
    bg2Button.click();
  }
  else if(btnState == 2){
    bg1Button.click();
  }
  else if(btnState == 1){
    bg4Button.click();
  }

});
