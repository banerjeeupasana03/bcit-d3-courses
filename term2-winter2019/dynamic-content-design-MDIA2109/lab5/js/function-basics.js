var functionBasics = function() {
  var hello = function(firstName, lastName) {
    var greeting = "HELLO";
    console.log(greeting + " " + firstName + " " + lastName);
  };

  function greet(array, surname, callbackFn) {
    for(var i = 0; i < array.length; i++) {
      callbackFn(array[i], surname);
    }
  };
  greet(["Upasana", "Suman", "Dipak", "Kumkum"], "Mukherjee", hello);
  greet(["Arup", "Shampa", "Debarati", "Debdas"], "Banerjee", function(firstName, lastName){
    var greeting = "HI";
    console.log(greeting + " " + firstName + " " + lastName);
  });
};
functionBasics();
