function Accordion(){
  var specsBtn = $("#specs_and_price");
  var accordionState = false;
  specsBtn.click(function(){
    var specsTextDiv = $("#specs_price_text");
    if(!accordionState){
      specsTextDiv.html(products[state]["specifications"]);
      accordionState = true;
      specsBtn.html("Hide Specs and Price");
    } else {
      specsTextDiv.html("");
      accordionState = false;
      specsBtn.html("Show Specs and Price");
    }
  });
};