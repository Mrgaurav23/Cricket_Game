let scoreStr = localStorage.getItem("Score");
      let score;
      resetScore(scoreStr);

      function resetScore(scoreStr) {
        score = scoreStr
          ? JSON.parse()
          : {
              Win: 0,
              Lost: 0,
              Tie: 0,
            };

        score.displayScore = function () {
          return `Win:${score.Win} Lost${score.Lost} Tie:${score.Tie}`;
        };

        getShowResult();
      }

      function generateComputerChoice() {
        let computerChoice;
        //Here we generate random number from 0 to 3
        let randomNumber = Math.random() * 3;
        if (randomNumber > 0 && randomNumber <= 1) {
          computerChoice = "Bat";
        } else if (randomNumber > 1 && randomNumber <= 2) {
          computerChoice = "Ball";
        } else {
          computerChoice = "Stump";
        }
        return computerChoice;
      }

      function getResult(userMove, computerMove) {
        if (userMove === "Bat") {
          if (computerMove === "Ball") {
            score.Win++;
            return "User won.";
          } else if (computerMove === "Bat") {
            score.Tie++;
            return `It's a tie`;
          } else if (computerMove === "Stump") {
            score.Lost++;
            return "Computer has won";
          }
        } else if (userMove === "Ball") {
          if (computerMove === "Ball") {
            score.Tie++;
            return `It's a tie`;
          } else if (computerMove === "Bat") {
            score.Lost++;
            return "Computer has won";
          } else if (computerMove === "Stump") {
            score.Win++;
            return "User won.";
          }
        } else {
          if (computerMove === "Ball") {
            score.Lost++;
            return "Computer has won";
          } else if (computerMove === "Bat") {
            score.Win++;
            return "User won.";
          } else if (computerMove === "Stump") {
            score.Tie++;
            return `It's a tie`;
          }
        }
      }

      function getShowResult(userMove, computerMove, result) {
        localStorage.setItem("Score", JSON.stringify(score));
        document.querySelector("#user-Move").innerText = userMove ? `You have choosen ${userMove}.` : "";
        document.querySelector("#computer-Move").innerText = computerMove ? `Computer have choosen ${computerMove}`: "";
        document.querySelector("#result").innerText = result || "";
        document.querySelector("#Score").innerText = score.displayScore();
      }