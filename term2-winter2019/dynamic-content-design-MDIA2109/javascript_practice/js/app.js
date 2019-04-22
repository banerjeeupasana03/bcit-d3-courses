function App() {
  SubmitBtnFunctionality();
  ResetBtnFunctionality();
  var handlerValue = PersonsAndProfessions();
  handlerValue.professionsForPersons(persons_1, professions_1);
  handlerValue.personsForProfessions(persons_2, professions_2);
  ProxyfunctionalityContainer();
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
function PersonsAndProfessions() {
  var handlers = {};

  var getRandomProfessionLevelsForPersons = function (localPersons, localProfesion) {
    var counter = 0;
    for (var i = 0; i < localPersons.length; i++) {
      var firstName = localPersons[i].first_name;
      var lastName = localPersons[i].last_name;
      for (var j = 0; j < localProfesion.length; j++) {
        counter = counter + 1;
        var name = localProfesion[j].name;
        var levels = localProfesion[j].levels;
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
  };

  var getRandomNamesforProfession = function (localPersons, localProfesion) {
    var counter = 0;
    for (var i = 0; i < localProfesion.length; i++) {
      var name = localProfesion[i].name;
      var levels = localProfesion[i].levels;
      for (var j = 0; j < levels.length; j++) {
        counter = counter + 1;
        var randomPosition = (Math.round(Math.random() * 100)) % localPersons.length;
        var firstName = localPersons[randomPosition].first_name;
        var lastName = localPersons[randomPosition].last_name;
        var print = counter + " " + name + " " + levels[j] + " " + firstName + " " + lastName;
        var div = document.createElement('div');
        div.innerHTML = print;
        var outputDiv = document.getElementById("resulttwo");
        if (counter % 2 == 0) {
          div.classList.add('green');
        } else {
          div.classList.add('red');
        }
        outputDiv.appendChild(div);
      }
    }
  };

  handlers.professionsForPersons = getRandomProfessionLevelsForPersons;
  handlers.personsForProfessions = getRandomNamesforProfession;

  return handlers;
}
