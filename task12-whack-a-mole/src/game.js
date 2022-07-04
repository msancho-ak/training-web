const game = new Game();
game.initialize();

function Game() {
  const holes = document.querySelectorAll(".hole");
  const scoreBoard = document.querySelector(".score");
  const levelBoard = document.getElementById("lvl");
  const moles = document.querySelectorAll(".mole");
  let scoresBoard = document.getElementById("score-board");
  const minPeepTime = 200;
  const maxPeepTime = 1000;

  const minPeepSecondLevel = 400;
  const maxPeepSecondLevel = 800;

  let lastHole;
  let timeUp = false;
  let score = 0;
  let hit = false;
  let gameTimer = null;
  let bonusTime = false;

  this.initialize = () => {
    window.localStorage.setItem("scores", JSON.stringify([]));
    this.addBestPlayers([]);
    moles.forEach((mole) => mole.addEventListener("click", this.bonk));
    holes.forEach((hole) => hole.addEventListener("click", this.fail));
  };

  this.randomTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  this.randomHole = (holes) => {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) return this.randomHole(holes);
    lastHole = hole;
    return hole;
  };

  this.peep = () => {
    let time = 0;
    if (score < 5) {
      time = this.randomTime(minPeepTime, maxPeepTime);
    } else {
      if (!bonusTime) {
        levelBoard.textContent = "Level 2";
        clearTimeout(gameTimer);
        gameTimer = null;
        gameTimer = setTimeout(() => (timeUp = true), 10000);
        bonusTime = true;
      }
      time = this.randomTime(minPeepSecondLevel, maxPeepSecondLevel);
    }
    const hole = this.randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
      hole.classList.remove("up");
      if (!timeUp) this.peep();
      else {
        scoresBoard.classList.remove("score-board--animation");
        this.saveScore();
        document.getElementById("username").value = "";
        document.getElementById("username").disabled = false;
      }
    }, time);
  };
  this.startGame = () => {
    document.getElementById("username").disabled = true;
    scoreBoard.textContent = 0;
    levelBoard.textContent = "Level 1";

    scoresBoard.classList.add("score-board--animation");

    timeUp = false;
    score = 0;
    this.peep();
    gameTimer = setTimeout(() => (timeUp = true), 10000);
  };

  this.bonk = (e) => {
    if (!e.isTrusted) {
      return;
    }
    const kick = document.getElementById("kick");
    kick.currentTime = 0;
    kick.play();
    score++;
    e.target.classList.remove("up");
    scoreBoard.textContent = score;
    hit = true;
  };

  this.fail = (e) => {
    if (!e.isTrusted) {
      return;
    }
    if (e.target.classList.value.includes("hole")) {
      if (gameTimer == null) return;
      const hihat = document.getElementById("hihat");
      hihat.currentTime = 0;
      hihat.play();
    }
  };
  //
  this.saveScore = () => {
    let userName = document.getElementById("username");
    let scores = JSON.parse(window.localStorage.getItem("scores"));
    if (scores.length < 5) {
      scores = [
        ...scores,
        {
          user: userName.value !== "" ? userName.value : "Anonymous",
          score: score,
        },
      ];
      scores = scores.sort((a, b) =>
        a.score > b.score ? 1 : b.score > a.score ? -1 : 0
      );
      window.localStorage.setItem("scores", JSON.stringify(scores));
    } else {
      for (let i = 0; i < scores.length; i++) {
        if (scores[i].score < score) {
          scores[i] = {
            user: userName.value !== "" ? userName.value : "Anonymous",
            score: score,
          };
          break;
        }
      }
    }
    scores = scores.sort((a, b) =>
      a.score > b.score ? 1 : b.score > a.score ? -1 : 0
    );
    window.localStorage.setItem("scores", JSON.stringify(scores));
    this.addBestPlayers(scores);
  };

  this.addBestPlayers = (list) => {
    list = list.reverse();

    let playersList = document.getElementById("playersList");
    playersList.innerHTML = "";

    if (list.length === 0) {
      playersList.innerHTML =
        playersList.innerHTML + "<li>There are no scores registred</li>";
    }
    for (let i = 0; i < list.length; i++) {
      playersList.innerHTML =
        playersList.innerHTML + `<li>${list[i].user} - ${list[i].score}</li>`;
    }
  };
}
