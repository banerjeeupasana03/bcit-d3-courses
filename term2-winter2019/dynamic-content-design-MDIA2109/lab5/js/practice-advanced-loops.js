var arr = [{f_name:"Suman", l_name: "Mukherjee"},
             {f_name: "Upasana", l_name: "Mukherjee"},
             {f_name: "Debdas", l_name: "Banerjee"}];

var object = function(arr){
  for(var index in arr){
    var obj = arr[index];
    for(var key in obj) {
      console.log(index, key, obj[key]);
    }
  }
}

// objectArray(names);
object(arr);
