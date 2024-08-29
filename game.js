let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
let msg = document.querySelector("#msg");

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = ComputerChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {
        //draw
        drawGame();
    }else{
        let userwin = true;
        if(userChoice=== "rock"){
            //comp can be scissors or paper
            userwin = compChoice === "paper"? false : true;
        }else if(userChoice ===paper){
            userwin = compChoice === "scissors" ? false : true;
        }else{ //rock, paper
            userwin = compChoice === "rock" ? false : true;
        }

        showWinner(userwin, userChoice, compChoice);
    }
};

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor ="green";
    }else{
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

const drawGame = () =>{
    msg.innerText = "Game was draw! Play again";
    msg.style.backgroundColor ="rgb(3, 3, 87)";
};

const ComputerChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randomindex = Math.floor(Math.random() * 3);                   //math.floor removes decimals & *3 means range 0-2
    return options[randomindex];
};
