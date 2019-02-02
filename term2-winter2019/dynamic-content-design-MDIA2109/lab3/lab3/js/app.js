var colorbut = document.querySelector("#color"),
    appDiv = document.querySelector("#app"),
    color = 0,
    numClicks = 0;

colorbut.addEventListener("click", function() {
  color = color + 10;
  numClicks = numClicks + 1;
 
  console.log(color, numClicks);
  if(color>255){
    color = 0;
  }
  if(numClicks < 30){
    appDiv.style.backgroundColor = "rgb("+color+","+color+","+color+")";
  } 
//  color is not hardcoded 
})