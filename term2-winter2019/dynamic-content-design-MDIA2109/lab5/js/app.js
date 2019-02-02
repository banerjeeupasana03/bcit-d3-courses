var myStar = document.querySelector("#mystar"),
    appDiv = document.querySelector("#app");

mystar.addEventListener("mouseenter", function() {
//  console.log(ev);
  mystar.style.width = "500px";
  mystar.style.height = "500px";
})

mystar.addEventListener("mouseout", function() {
  mystar.style.width = "50px";
  mystar.style.height = "50px";
})

window.addEventListener("keyup", function(ev) {
  console.log(ev.keyCode, ev.key);
//  if(ev.keyCode == 83){
//    alert("you've typed s");
//  }
  if(ev.key == "s") {
//    alert("you've typed s");
//  appDiv.innerHTML = appDiv.innerHTML+"<img src ='star.svg' class='stars' />";
//    var starImg = document.createElement("img");
//    starImg.src = "star.svg";
//    starImg.className = "stars";
//    appDiv.appendChild(starImg);
    CreateStar()    }
})

window.addEventListener("mousemove", function(ev) {
 if(ev.altKey == true) {
   CreateStar(ev.pageX, ev.pageY);
 }
})
                        
function CreateStar(x, y){
  var w = Math.round(Math.random()*50),
      h = Math.round(Math.random()*50),
      rot = Math.round(Math.random()*360),
//      t = Math.round(Math.random()*window.innerHeight),
//      l = Math.round(Math.random()*window.innerWidth);
      t = y,
      l = x;
  
  var op = w/50;
      
  var starImg = document.createElement("img");
    starImg.src = "star.svg";
    starImg.className = "stars";
  starImg.style.width = w+"px";
  starImg.style.height = h+"px";
  starImg.style.top = t+"px";
  starImg.style.left = l+"px";
  starImg.style.opacity = op;
  
  starImg.style.transform = "rotate("+rot+"deg)";
  appDiv.appendChild(starImg);
   
  setInterval(function() {
    var nt = Math.round(Math.random()*window.innerHeight),
        nl = Math.round(Math.random()*window.innerWidth);
    starImg.style.top = nt+"px";
    starImg.style.left = nl+"px";
  }, 1000);
}