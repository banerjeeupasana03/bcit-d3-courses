//var snowTransition = document.querySelector("#app>img");
//snowTransition.addEventListener("click", function() {
//  snowTransition.style.top = 200 + "px";
//});

/* State Variables - the UI that will change*/
var snow = document.querySelector(".snows"),
    app = document.querySelector("#app"),
    ground = document.querySelector("#ground"),
    gh = 1;
//gh = ground height



/* Interactions / Listeners */
function ClickSnow(){
  //MoveSnow();
  //MoveSnow(app) = app.style.top = "500px"
  CreateSnow();
  CreateSnow();
  CreateSnow();
  CreateSnow();
  CreateSnow();
}

setInterval(function(){
  CreateSnow();
}, 200);



/* functions that changes the state */
function MoveSnow(s){
  //var s = newSnow
  //this function moves the snow
  // a delay?
  setTimeout(function() {
    s.style.top = window.innerHeight + "px";
    
    setTimeout(function(){
      RemoveSnow(s);
    }, 5000);
  }, 100);
}

function CreateSnow(){
  //this function creates a new snow <img>
 
  var newSnow = document.createElement("img");
  newSnow.src = "snow_ball.svg";
  newSnow.className = "snows";
  newSnow.style.left = Math.round(Math.random()*window.innerWidth) + "px";
  newSnow.style.top = "-100px";
  var dim = Math.round(Math.random()*50);
  newSnow.style.width = dim + "px";
  newSnow.style.height = dim + "px";
  
  //multiple classes
  //newSnow.classList = ["snows", "class2"];
  app.appendChild(newSnow);
  MoveSnow(newSnow);
  
  //newSnow.style.top = "500px";
}

function RemoveSnow(snowToRemove){
  // var snowToRemove = whatever is sent over
  //this function removes the snow
  app.removeChild(snowToRemove);
  if(gh < 300){
    gh = gh + 0.1;
  ground.style.height = gh + "px";
    }
  };
  

