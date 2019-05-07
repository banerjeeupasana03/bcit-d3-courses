function App() {

  var pkg = {
    fontSize: 5,
    imgDim: 50,
    imgUrl: "",
    msg: "",
    bgColor: "",
    fontColor: "",
    status: ""
  };
}

// exponent(5, 10) -> 15625 -> 5, 5*5, 5*5*5, 5*5*5*5, ...
function exponent(num, limit) {
  var result = 1;
  for(var i = 0; i < limit; i++) {
    result = result * num;
    console.log(i, result);
  }
  return result;
}

// arithmeticProgression(10) -> 55 -> 1, 1+2, 1+2+3, 1+2+3+4 ...
function arithmeticProgression(limit) {
  var res = 0;
  for(var i=0; i < limit; i++) {
    res = res + (i +1);
    console.log(i, res);
  }
  return res;
}