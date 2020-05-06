const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' ||userInput === 'paper' ||userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid Input');
  }
};
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  let computerInput = '';
  switch (randomNum) {
    case 0 : computerInput = 'rock'; break;
    case 1 : computerInput = 'paper'; break;
    case 2 : computerInput = 'scissors'; break;
    default : console.log('Invalid Computer Input');
  }
    return computerInput;
  };
  const determineWinner = (userChoice,computerChoice) => {
    if( userChoice === 'bomb') {
      return 'User Won';
    }
    if( userChoice === computerChoice ){
      return 'This match was a tie';
    } 
    if (userChoice === 'rock'){
      if (computerChoice === 'paper') {
        return 'Computer Won';
      } else {return 'User Won';}
    }
    if (userChoice === 'scissors') {
      if (computerChoice == 'rock') {
        return 'Computer Won';
      } else {
        return 'User Won';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice == 'scissors') {
        return 'Computer Won';
      } else {
        return 'User Won';
      }
    }
  };
  function playGame () {
    let userChoice = getUserChoice('rock');
    console.log(`User Choice: ${userChoice}`);
    let computerChoice = getComputerChoice();
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
  }
  playGame()