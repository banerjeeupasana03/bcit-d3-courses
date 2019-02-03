function functionAdvanced() {
  var cap = function(name) {
    var v1 = name.charAt(0);
    var v2 = name.slice(1,name.length);
    var v3 = v1.toUpperCase() + v2;
    return v3;
  };

  var hi = function(firstName, lastName) {
    var greeting = "hi" + " " + cap(firstName) + " " + cap(lastName);
    console.log(greeting);
  };

  var hello = function(firstName, lastName) {
    var greeting = "hello" + " " + cap(firstName) + " " + cap(lastName);
    console.log(greeting);
  };

  var mukh = ["upasana", "suman", "dipak", "kumkum"];
  var ban = ["arup", "shampa", "debarati", "debdas"];

  var list1 = function(arr, surname, greet){
    for(var i = 0; i < arr.length; i++){
      greet(arr[i], surname);
    }
  };
  list1(mukh, "mukherjee", hi);
  list1(ban, "banerjee", hello);

};
functionAdvanced();









// list1(mukh, "Mukherjee", hello);
// list2(ban, "Banerjee", hi);
