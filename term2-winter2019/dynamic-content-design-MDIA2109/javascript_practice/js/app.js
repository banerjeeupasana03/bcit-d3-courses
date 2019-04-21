function App() {
  SubmitBtnFunctionality();
  ResetBtnFunctionality();
  getRandomProfessionLevelsForPersons();
  getRandomNamesforProfession();
};

var formState = {
  submitState: false,
  resetState: false
};

function SubmitBtnFunctionality() {
  var submitBtn = document.querySelector("#submit_btn input[type='submit']");
  submitBtn.addEventListener("click", function () {
    alert("Submit button clicked");
  });
}

function ResetBtnFunctionality() {
  var resetBtn = document.querySelector("#submit_btn input[type='reset']");
  resetBtn.addEventListener("click", function () {
    alert("reset button clicked");
  });

}


/// PRACTICE

var persons = [{
  first_name: "Marianne",
  last_name: "Clemencon",
  email: "mari@com",
  description: "lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum"
}, {
  first_name: "Dickie",
  last_name: "Duny",
  email: "Dickie@com",
  description: "odio elementum eu interdum eu tincidunt in leo maecenas pulvinar"
}, {
  first_name: "Darcey",
  last_name: "Kinnon",
  email: "Darcey@com",
  description: "elementum ligula vehicula consequat morbi a ipsum integer a nibh"
}, {
  first_name: "Mireille",
  last_name: "McJerrow",
  email: "Mireille@com",
  description: "convallis tortor risus dapibus augue vel accumsan tellus nisi eu"
}, {
  first_name: "Elvis",
  last_name: "Teers",
  email: "Elvis@com",
  description: "tortor id nulla ultrices aliquet maecenas leo odio condimentum id"
}, {
  first_name: "Mabel",
  last_name: "Hatchett",
  email: "Mabel@com",
  description: "felis eu sapien cursus vestibulum proin eu mi nulla ac"
}, {
  first_name: "Reagen",
  last_name: "Pankethman",
  email: "Reagen@com",
  description: "lorem vitae mattis nibh ligula nec sem duis aliquam convallis"
}, {
  first_name: "Ailsun",
  last_name: "O'Longain",
  email: "Ailsun@com",
  description: "non interdum in ante vestibulum ante ipsum primis in faucibus"
}, {
  first_name: "Jeremias",
  last_name: "Spittal",
  email: "Jeremias@com",
  description: "orci mauris lacinia sapien quis libero nullam sit amet turpis"
}, {
  first_name: "Liana",
  last_name: "Rapper",
  email: "Liana@com",
  description: "pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero"
}, {
  first_name: "Eolande",
  last_name: "Orrom",
  email: "Eolande@com",
  description: "magna at nunc commodo placerat praesent blandit nam nulla integer"
}, {
  first_name: "Giraud",
  last_name: "Wisniewski",
  email: "Giraud@com",
  description: "habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam"
}, {
  first_name: "Maryl",
  last_name: "Baglin",
  email: "Maryl@com",
  description: "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies"
}, {
  first_name: "Alexis",
  last_name: "Tavener",
  email: "Alexis@com",
  description: "vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum"
}, {
  first_name: "Rodrique",
  last_name: "Ormiston",
  email: "Rodrique@com",
  description: "porttitor id consequat in consequat ut nulla sed accumsan felis"
}, {
  first_name: "Benoite",
  last_name: "Madeley",
  email: "Benoite@com",
  description: "eget semper rutrum nulla nunc purus phasellus in felis donec"
}, {
  first_name: "Aksel",
  last_name: "Sweetnam",
  email: "Aksel@com",
  description: "dui nec nisi volutpat eleifend donec ut dolor morbi vel"
}, {
  first_name: "Sashenka",
  last_name: "Coker",
  email: "Sashenka@com",
  description: "eleifend luctus ultricies eu nibh quisque id justo sit amet"
}, {
  first_name: "Haze",
  last_name: "Berard",
  email: "Haze@com",
  description: "nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin"
}, {
  first_name: "Glori",
  last_name: "Ruusa",
  email: "Glori@com",
  description: "porttitor lacus at turpis donec posuere metus vitae ipsum aliquam"
}];

var professions = [
  {
    name: "coding",
    levels: ["pro", "novice", "expert"]
  },
  {
    name: "painting",
    levels: ["start", "advanced", "mature", "Expert"]
  },
  {
    name: "singing",
    levels: ["basic", "pro", "great", "maestro", "Divine"]
  }
];

function getRandomProfessionLevelsForPersons() {
  var i;
  var counter = 0;
  for (i = 0; i < persons.length; i++) {
    var firstName = persons[i].first_name;
    var lastName = persons[i].last_name;
    for (var j = 0; j < professions.length; j++) {
      counter = counter + 1;
      var name = professions[j].name;
      var levels = professions[j].levels;
      var randomPosition = (Math.round(Math.random() * 100)) % levels.length;
      var print = counter + " " + firstName + " " + lastName + " " + "is " + levels[randomPosition] + " in" + " " + name;
      var div = document.createElement('div');
      div.innerHTML = print;
      var outputDiv = document.getElementById("result");
      if (counter % 2 == 0) {
        div.classList.add('green');
      } else {
        div.classList.add('red');
      }
      outputDiv.appendChild(div);
    }
  }
}

function getRandomNamesforProfession() {
  var counter = 0;
  for (var i = 0; i < professions.length; i++) {
    var name = professions[i].name;
    var levels = professions[i].levels;
    for (var j = 0; j < levels.length; j++) {
      counter = counter + 1;
      var randomPosition = (Math.round(Math.random() * 100)) % persons.length;
      var firstName = persons[randomPosition].first_name;
      var lastName = persons[randomPosition].last_name;
      var print = counter + " " + name + " " + levels[j] + " " + firstName + " " + lastName;
      var div = document.createElement('div');
      div.innerHTML = print;
      var outputDiv = document.getElementById("resulttwo");
      if(counter % 2 == 0){
        div.classList.add('green');
      } else {
        div.classList.add('red');
      }
      outputDiv.appendChild(div);
    }
  }
}
