function ProxyLearningContainer() {
  var object = {
    name: "Khepu",
    occupation: "software",
    food: "lentil",
    color: "blue"
  };

  var handler = {
    get: function (obj, prop) {
      obj[prop];
      if()
      obj["nothing"] = "non-existant";
      return obj["nothing"];
    },

    set: function (obj, prop, value) {
      obj[prop] = value;
    }
  };

  var prox = new Proxy(object, handler);

  var output = prox.nothing;
  //  prox.hobby = "football";
  //  var add = prox.hobby;
  console.log(output);
}
