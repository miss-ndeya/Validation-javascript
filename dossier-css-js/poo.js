const totalScore = document.getElementById("totalscore");
const para = document.getElementById("p");
let scoreQuestion = 0;

document.getElementById("sauter").addEventListener("click", function () {
  quizz.parcourireForm();
});

class Quizz {
  constructor() {
    this.question = 0;
    this.score = document.getElementById("score");
    this.questions = document.querySelectorAll(".question");
    this.reponses = document.querySelectorAll(".reponse input");
}

  foreachFonction() {
    this.reponses.forEach(function (reponse) {
      reponse.addEventListener("click", function () {
        setTimeout(function () {
          quizz.parcourireForm();
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
        // quizz.localStorageFunction();
      });
    });
  }

  parcourireForm() {
    this.question += 1;
    for (let i = 0; i < this.questions.length; i++) {
      this.questions[i].className = "question";
      this.questions[this.question].className = "question active";
      if (this.question == 10) {
        sauter.style.display = "none";
      }
    }
  }
}
const quizz = new Quizz();
quizz.foreachFonction();

// localStorageFunction() {
  let score = localStorage.getItem("score")
  if ( score !== null) {
    para.textContent = `votre score est de ${score}`;
  }
// }