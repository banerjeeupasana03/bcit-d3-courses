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
  
  var x = {
    foo: "bar"
  };
  var handlers = {
    get: function(obj, prop) {
      var original = obj[prop];
      var res = original.charAt(0).toUpperCase() + original.slice(1, original.length - 1);
      return res;
    },
    set: function(obj, prop, val) {
      obj[prop] = val;
    }
  };
  var p = new Proxy(x, handlers)
  p.foo = "baz";
}
