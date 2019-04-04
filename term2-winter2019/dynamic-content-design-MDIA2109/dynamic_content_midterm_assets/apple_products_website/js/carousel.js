function Carousel() {
  var leftArrowBtn = document.querySelector("#main .arrow_left_image");
  var rightArrowBtn = document.querySelector("#main .arrow_right_image");
 
  leftArrowBtn.addEventListener("click", function(){
    var h3 = document.querySelector("#display h3");
    var img = document.querySelector("#display img");
    var product;
    var descriptionDiv = document.querySelector("#description_container");
    var imgDiv = document.querySelector("#image_holder");
    var showSpecsBtn = document.querySelector("#specs_and_price");
    var specsTextDiv = document.querySelector("#specs_price_text");
    if(state > 0){
      state = state - 1;
      product = products[state];
      h3.innerHTML = product["name"];
      img.src = product.url;
      descriptionDiv.innerHTML = "";
      imgDiv.classList.remove("center");
      showSpecsBtn.classList.add("hide");
      specsTextDiv.innerHTML = "";
      showMoreState = false;
      accordionState = false;
      showSpecsBtn.innerHTML = "Show Specs and Price";
    }
  });
  
  rightArrowBtn.addEventListener("click", function(){
    var h3 = document.querySelector("#display h3");
    var img = document.querySelector("#display img");
    var product;
    var descriptionDiv = document.querySelector("#description_container");
    var imgDiv = document.querySelector("#image_holder");
    var showSpecsBtn = document.querySelector("#specs_and_price");
    var specsTextDiv = document.querySelector("#specs_price_text");
    if(state < (products.length - 1)){
      state = state + 1;
      product = products[state];
      h3.innerHTML = product["name"];
      img.src = product.url;
      descriptionDiv.innerHTML = "";
      imgDiv.classList.remove("center");
      showSpecsBtn.classList.add("hide");
      specsTextDiv.innerHTML = "";
      showMoreState = false;
      accordionState = false;
      showSpecsBtn.innerHTML = "Show Specs and Price";
    }
  });
}
 