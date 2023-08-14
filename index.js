// recuperation elements html
const score = document.getElementById("score");
const questions = document.querySelectorAll(".question");
const reponses = document.querySelectorAll(".reponse input");
const totalScore = document.getElementById("totalscore");
const para = document.getElementById('p')

let question = 0;
let scoreQuestion = 0;



//  boucle pour parcourir la liste 
reponses.forEach(function (reponse) {
  // evenement click sur l'input 
  reponse.addEventListener("click", function () {
    setTimeout(function () {
      quizz();
    }, 800);
    // recuperer l'attribut valid
    let valider = this.getAttribute("valid");
    // condition pour l'score
    if (valider == "valid") {
      scoreQuestion += 1;
      score.innerHTML = scoreQuestion;
      totalScore.innerHTML = scoreQuestion;
      localStorage.setItem("score", scoreQuestion);
    } else {
      scoreQuestion -= 1;
      score.innerHTML = scoreQuestion;
      totalScore.innerHTML = scoreQuestion;
    }
  });
});

// ecouteur d'evenement au click du button sauter
sauter.addEventListener("click", () => {
    quizz();
})

// fonction pour sauter une reponse
function quizz() {
  question += 1
  for (let i = 0; i < questions.length; i++) {
      questions[i].className = "question" 
      questions[question].className = "question active"
      if (question == 10) {
          sauter.style.display = "none"
  }
  }
}


if (localStorage.getItem("score" )!= null) {
    para.textContent = `votre score est de ${localStorage.getItem("score")}`
  }