function resizeImage(x){
    if(x.matches){
        document.getElementById('your-choice-img').className = "w-100 d-md-none d-inline";
        document.getElementById('comp-choice-img').className = "w-100 d-md-none d-inline";
        // document.getElementsByClassName('RPS-main-heading text-center').style.fontSize = 100%;
    }else{
        document.getElementById('your-choice-img').className = "w-50 d-md-inline d-none";
        document.getElementById('comp-choice-img').className = "w-50 d-md-inline d-none";
        // document.getElementsByClassName('RPS-main-heading text-center').style.fontSize = 50%;
    }
    
}

let x = window.matchMedia("(max-width: 768px)")
resizeImage(x)
x.addListener(resizeImage)

let Rock = document.getElementById('ROCK').textContent
let Paper = document.getElementById('PAPER').textContent
let Scissors = document.getElementById('SCISSORS').textContent

let yourChoice, compChoice;
let result = document.getElementById('result');
let ResPara = document.getElementById('Result');


function chooseRock(){
    yourChoice = Rock;
    let randCompChoice = Math.ceil(Math.random() * 100) % 3;
    if (randCompChoice === 0){
        compChoice = Rock;
        result.textContent = "DRAW";
        ResPara.style.backgroundColor = "#0285FA";
    }else if(randCompChoice === 1){
        compChoice = Paper;
        let compScore = document.getElementById('comp-score').textContent;
        document.getElementById('comp-score').textContent = parseInt(compScore) + 1;
        result.textContent = "YOU LOSE";
        ResPara.style.backgroundColor = "#FF4438";
    }else{
        compChoice = Scissors;
        let yourScore = document.getElementById('your-score').textContent;
        document.getElementById('your-score').textContent = parseInt(yourScore) + 1;
        result.textContent = "YOU WON";
        ResPara.style.backgroundColor = "#03B365";
    }

    document.getElementById('your-choice-img').src = yourChoice + ".png";
    document.getElementById('comp-choice-img').src = compChoice + ".png";
    console.log(compChoice);
}



function choosePaper(){
    yourChoice = Paper;
    let randCompChoice = Math.ceil(Math.random() * 100) % 3;

    if (randCompChoice === 0){
        compChoice = Rock;
        let yourScore = document.getElementById('your-score').textContent;
        document.getElementById('your-score').textContent = parseInt(yourScore) + 1;
        result.textContent = "YOU WON";
        ResPara.style.backgroundColor = "#03B365";
        
    }else if(randCompChoice === 1){
        compChoice = Paper;
        result.textContent = "DRAW";
        ResPara.style.backgroundColor = "#0285FA";
    }else{
        compChoice = Scissors;
        let compScore = document.getElementById('comp-score').textContent;
        document.getElementById('comp-score').textContent = parseInt(compScore) + 1;
        result.textContent = "YOU LOSE";
        ResPara.style.backgroundColor = "#FF4438";
    }

    document.getElementById('your-choice-img').src = yourChoice + ".png";
    document.getElementById('comp-choice-img').src = compChoice + ".png";
    console.log(compChoice);
}



function chooseScissors(){
    yourChoice = Scissors;
    let randCompChoice = Math.ceil(Math.random() * 100) % 3;

    if (randCompChoice === 0){
        compChoice = Rock;
        let compScore = document.getElementById('comp-score').textContent;
        document.getElementById('comp-score').textContent = parseInt(compScore) + 1;
        result.textContent = "YOU LOSE";
        ResPara.style.backgroundColor = "#FF4438";
    }else if(randCompChoice === 1){
        compChoice = Paper;
        let yourScore = document.getElementById('your-score').textContent;
        document.getElementById('your-score').textContent = parseInt(yourScore) + 1;
        result.textContent = "YOU WON";
        ResPara.style.backgroundColor = "#03B365";
    }else{
        compChoice = Scissors;  
        result.textContent = "DRAW";
        ResPara.style.backgroundColor = "#0285FA";
    }

    document.getElementById('your-choice-img').src = yourChoice + ".png";
    document.getElementById('comp-choice-img').src = compChoice + ".png";
    console.log(compChoice);
}

function Reset(){
    document.getElementById('your-choice-img').src = "ROCK.png";
    document.getElementById('comp-choice-img').src = "ROCK.png";
    document.getElementById('comp-score').textContent = 0;
    document.getElementById('your-score').textContent = 0;
    result.textContent = "";
    ResPara.style.backgroundColor = "#000";
}