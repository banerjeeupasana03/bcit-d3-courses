var myBox = document.querySelector("#box")
var myNum = 200;
//if you put quotation then it is treated as literature, so it is concatenated
var myUnit = "px";
var expBut = document.querySelector("#exp")
var contBut = document.querySelector("#cont")
var moveRight = document.querySelector("#right")
var colorBut = document.querySelector("#col")
document.querySelector("#but1").addEventListener("click", function () {
  myBox.style.width = myNum+myUnit;
  myBox.style.height = myNum+myUnit;
// myBox.style.backgroundColor = "#ADD";
})
expBut.addEventListener("click", function() {
  console.log("before", myNum);
  myNum = myNum + 10;
  console.log("after", myNum);
  myBox.style.width = myNum+myUnit;
  myBox.style.height = myNum+myUnit;
//  myBox.style.backgroundColor = "yellow";
//  myBox.style.border = "5px solid black";
  })
contBut.addEventListener("click", function() {
  console.log("before", myNum );
  myNum = myNum - 10;
  console.log("after", myNum );
  myBox.style.widthc= myNum+myUnit;
  myBox.style.height = myNum+myUnit;
})
moveRight.addEventListener("click", function() {
  myBox.style.float = "right";
  myBox.style.backgroundColor = "#BDA"
})
//var colorBut = document.querySelector("#color");
var r = 0;
var g = 0;
var b = 0;
var begin = "rgb(";
var comma = ",";
var end = ")"
colorBut.addEventListener("click", function(){
  r = r + 10;
  g = g + 10;
  b = b + 10;
  myBox.style.backgroundColor = "rgb("+r+","+g+","+b+")";
})
//hard data: cannot be changed;
//Varied data: can be changed
//look up: rotation in css
// r = Math.round(Math.random()*255)
//look up absolute value in Math and concepts
//ceilimg and floor concepts in rounding off decimal number.