function ShowMore(){
  var showMoreBtn = $("#buttons #show_more");
  showMoreBtn.click(function(){
    var descriptionDiv = $("#description");
    var product = products[state];
    var imgDiv = $("#image_holder");
    descriptionDiv.html("<div>" + product["description"] + "</div>");
    imgDiv.addClass("center");
  });
}
