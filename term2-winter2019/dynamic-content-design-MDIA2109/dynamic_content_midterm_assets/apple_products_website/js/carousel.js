function Carousel() {
  var leftArrowBtn = $("#main .arrow_left_image");
  var rightArrowBtn = $("#main .arrow_right_image");
 
  leftArrowBtn.click(function(){
    var h3 = $("#display h3");
    var img = $("#display img");
    var product;
    var descriptionDiv = $("#description_container");
    var imgDiv = $("#image_holder");
    var showSpecsBtn = $("#specs_and_price");
    if(state > 0){
      state = state - 1;
      product = products[state];
      h3.html(product["name"]);
      img.attr("src", product.url);
      descriptionDiv.html("");
      imgDiv.removeClass("center");
      showSpecsBtn.addClass("hide");
    }
  });
  
  rightArrowBtn.click(function(){
    var h3 = $("#display h3");
    var img = $("#display img");
    var product;
    var descriptionDiv = $("#description_container");
    var imgDiv = $("#image_holder");
    var showSpecsBtn = $("#specs_and_price");
    if(state < (products.length - 1)){
      state = state + 1;
      product = products[state];
      h3.html(product["name"]);
      img.attr("src", product.url);
      descriptionDiv.html("");
      imgDiv.removeClass("center");
      showSpecsBtn.addClass("hide");
    }
  });
}
 