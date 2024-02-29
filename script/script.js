  let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    lose: 0,
    tie: 0
  }
  updateScore();
  function playGame(playerMove) {
  const computerMove = pickComputerMove();
  
  let result = '';

  if(playerMove === 'rock'){
    if(computerMove === 'rock'){
    result = 'Tie';
  } else if(computerMove === 'paper'){
    result = 'You lose';
  } else if(computerMove === 'scissors'){
    result = 'You win!';
    }
  } 
  if(playerMove === 'paper'){
    if(computerMove === 'paper'){
  result = 'Tie';
    } else if(computerMove === 'scissors'){
    result = 'You lose';
    } else if(computerMove === 'rock'){
    result = 'You win!';
    }
  } 
  if(playerMove === 'scissors'){
    if(computerMove === 'scissors'){
  result = 'Tie';
  } else if(computerMove === 'rock'){
    result = 'You lose';
  } else if(computerMove === 'paper'){
    result = 'You win!';
    }
  }
  if(result === 'You win!'){
    score.wins += 1;
  } else if (result === 'You lose'){
    score.lose += 1;
  } else if (result === 'Tie'){
    score.tie += 1;
  }
  console.log(`Player pick ${playerMove}, Computer pick ${computerMove}\n${result}`);
  localStorage.setItem('score', JSON.stringify(score))
  console.log(`Wins: ${score.wins} Lose: ${score.lose} Tie: ${score.tie}`);
  document.querySelector('.js-result').innerHTML =
  `${result}`
  document.querySelector('.js-show').innerHTML = 
  `<p class="js-show">You <img class="show-css" src="img/${playerMove}.png"> <img class="show-css" src="img/${computerMove}.png"> Computer</p>`
  }

  function updateScore(){
    document.querySelector('.js-score').innerHTML =
    `Wins: ${score.wins} Lose: ${score.lose} Tie: ${score.tie}`
  }


  function pickComputerMove(){
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3 ){
  computerMove = 'rock';
  } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
  computerMove = 'paper';
  } else if(randomNumber >= 2 / 3 && randomNumber < 1){
  computerMove = 'scissors';
  }     
  return computerMove;
  }