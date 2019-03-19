function Accordion(){
  var specsBtn = document.querySelector("#specs_and_price");
  var accordionState = false;
  specsBtn.addEventListener("click", function(){
    var specsTextDiv = document.querySelector("#specs_price_text");
    if(!accordionState){
      specsTextDiv.innerHTML = products[state]["specifications"];
      accordionState = true;
      specsBtn.innerHTML = "Hide Specs and Price";
    } else {
      specsTextDiv.innerHTML = "";
      accordionState = false;
      specsBtn.innerHTML = "Show Specs and Price";
    }
  });
};