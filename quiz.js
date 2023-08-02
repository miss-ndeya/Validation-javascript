const sauter = document.getElementById("sauter");
const score = document.getElementById("score");
const totalScore = document.getElementById("totalscore");
const countdown = document.getElementById("countdown");
const set = document.querySelectorAll(".set");
const row = document.querySelectorAll(".row input");
let count = 0;
let scoreCount = 0;
let duration = 0;

sauter.addEventListener("click", function () {
  quizz();
});

row.forEach(function (rowSingle) {
  rowSingle.addEventListener("click", function () {
    setTimeout(function () {
      quizz();
    }, 500);
    let valid = this.getAttribute("valid");
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

