let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#computerscore");


const genCompChoice = () => {
    const options = ["rock", "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
     msg.innerText = "draw hogaya bey ! "
     msg.style.backgroundColor = "#081b31" ;
};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("user has won");
        msg.innerText = `you win! ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "orange" ;
    }else{
        compScore++;
        compScorePara.innerText = compScore;
         msg.innerText = "chutiya banaya tumko ! "
         msg.innerText = `you lost! ${compChoice} beats ${userChoice} `;
         msg.style.backgroundColor = "red" ;
    }
}




const playGame = (userChoice) => {
    console.log("user choice = " , userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = " , compChoice);

    if(userChoice === compChoice){
        //drawGame
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissor , paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // rock , scissor
              userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("Id");
         playGame(userChoice);
    });
});