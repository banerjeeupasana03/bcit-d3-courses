function ProxyfunctionalityContainer() {
  var obj = {
    name: "suman",
    hobby: "coding",
    color: "blue"
  }
  var handler = {
    get: function (obj, prop) {
      var caps = "";
      var small = "";
      var result = "";
      obj[prop];
      for (var i = 0; i < obj[prop].length; i++) {
        if (i % 2 == 0) {
          caps = obj[prop].charAt(i).toUpperCase();
        } else {
          small = obj[prop].charAt(i).toLowerCase();
        }
        result = result + (caps + small);
        caps = "";
        small = "";
      }
      return result;
    },

    set: function (obj, prop, val) {
      obj[prop] = val;
    }
  };

  var prox = new Proxy(obj, handler);

  var result_1 = prox.name;
  console.log(result_1);
}
