document.addEventListener('DOMContentLoaded', function(){ 
    alert("page is loaded and ready");
}, false);
 
function changeParagraphContent() {
  var element = document.getElementById("demo");
  if(element.classList.contains("red")) {
    element.innerHTML = "This page contains some simple html and css";
    element.classList.remove("red");
  } else {
    element.innerHTML = "This is the new paragraph text";
    element.classList.add("red");
  }
}
