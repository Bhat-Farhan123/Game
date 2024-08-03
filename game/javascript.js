let userScore=0;
let compScore=0;


const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


// generates 0,1,2, no's randomly
const genCompChoice = ()=> {
  const  options = ["rock", "paper", "Scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};



const drawGame = ()=>{
   msg.innerText ="Game Was Draw. Play Again.";
   msg.style.backgroundColor="blue";
   
}



const showWinner =(userWin, userChoice , compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("You Win");
    msg.innerText =`You Win! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor="green";
  }
  else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText =`You Lose. ${compChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor="red";
  }
}




  //user choice
const playGame = (userChoice) =>{
 
  // Generate computer choice
  const compChoice = genCompChoice();
  

  if(userChoice === compChoice){
    //draw game
    drawGame();
  }else{
    let userWin = true;
    if(userChoice ==='rock'){
      userWin= compChoice ==='paper'? false:true;
    }else if(userChoice ==="paper"){
      userWin = compChoice ==="Scissors"?false:true;
    }else{
      userWin= compChoice ==="rock"?false:true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};




  choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
  });

  