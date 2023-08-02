// selectionner mes elements html
const sauter = document.getElementById("sauter");
const score = document.getElementById("score");
const totalScore = document.getElementById("totalscore");
const countdown = document.getElementById("countdown");
const set = document.querySelectorAll(".set");
const row = document.querySelectorAll(".row input");

// declaration variable
let count = 0;
let scoreCount = 0;

// fonction pour ajouter un ecouteur d'evenement 
sauter.addEventListener("click", function () {
  quizz();
});

// boucle pour parcourir la liste 
row.forEach(function (rowSingle) {
  // evenement click sur l'input 
  rowSingle.addEventListener("click", function () {
    setTimeout(function () {
      quizz();
    }, 500);
    // recuperer l'attribut valid
    let valid = this.getAttribute("valid");
    // condition pour l'score
    if (valid == "valid") {
      scoreCount += 1;
      score.innerHTML = scoreCount;
      totalScore.innerHTML = scoreCount;
    } else {
      scoreCount -= 1;
      score.innerHTML = scoreCount;
      totalScore.innerHTML = scoreCount;
    }
  });
});

// fonction pour valider la reponse
function quizz() {
  count += 1;
  for (let i = 0; i < set.length; i++) {
    set[i].className = "set";
  }
  set[count].className = "set active";
  if (count == 10) {
    sauter.style.display = "none";
  }
}

