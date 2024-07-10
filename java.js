let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreP= document.querySelector("#user-score");
const compScoreP= document.querySelector("#computer-score");

const genCompChoice =()=>{
    const option=["Rock","paper","scisser"];
    const randIdx= Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreP.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} bets ${compChoice}`;
        msg.style.backgroundColor="blue";
        msg.style.color="white";
    }else{
        compScore++;
        compScoreP.innerText=compScore;
        console.log("you loss");
        msg.innerText=`You Lost ${compChoice} bets Your ${userChoice}`;
        msg.style.backgroundColor="red";
    };
};

const playgame=(userChoice)=>{
    console.log("user Choice=", userChoice);
    const compChoice=genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="Rock"){
            userWin= compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice === "scisser"? false:true;
        }else{
            userWin=compChoice==="Rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    };

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});