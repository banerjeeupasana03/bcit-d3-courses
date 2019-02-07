var loopArrayMethod1 = function(arr) {
  for (var index = 0; index < arr.length; index++){
    console.log(arr[index], "Mukherjee");
  }
};
loopArrayMethod1(["Suman", "Upasana"]);
console.log("------------------------");

var loopArrayMethod2 = function(arr) {
  for (var index in arr) {
    console.log(arr[index], "Mukherjee");
  }
};
loopArrayMethod2(["Suman", "Upasana"]);
console.log("------------------------");

var loopArrayMethod3 = function(arr) {
  arr.forEach(function(item, index) {
    console.log(index, item, "Mukherjee");
  });
};
loopArrayMethod3(["Suman", "Upasana"]);
console.log("------------------------");

var loopObjectMethod1 = function(obj) {
  for (var key in obj) {
    console.log(obj[key], "Mukherjee");
  }
};
loopObjectMethod1({s_name: "Suman", u_name: "Upasana"});
console.log("------------------------");
