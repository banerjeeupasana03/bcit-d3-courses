function ShowMore(){
  var showMoreBtn = document.querySelector("#buttons #show_more");
  showMoreBtn.addEventListener("click", function(){
    var descriptionDiv = document.querySelector("#description_container");
    var product = products[state];
    var imgDiv = document.querySelector("#image_holder");
    var showSpecsBtn = document.querySelector("#specs_and_price");
    descriptionDiv.innerHTML = product["description"];
    imgDiv.classList.add("center");
    showSpecsBtn.classList.remove("hide");
    showMoreState = true;
  });
}
