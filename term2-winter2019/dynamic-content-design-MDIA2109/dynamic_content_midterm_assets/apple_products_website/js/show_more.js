function ShowMore(){
  var showMoreBtn = $("#buttons #show_more");
  showMoreBtn.click(function(){
    var descriptionDiv = $("#description_container");
    var product = products[state];
    var imgDiv = $("#image_holder");
    var showSpecsBtn = $("#specs_and_price");
    descriptionDiv.html(product["description"]);
    imgDiv.addClass("center");
    showSpecsBtn.removeClass("hide");
    showMoreState = true;
  });
}
