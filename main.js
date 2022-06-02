const computerChoiceDisplay= document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultShow = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");
//Global Variable
let userChoice
let result
//pass through event
possibleChoices.forEach(button => button.addEventListener('click', (e) =>{
  userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice;
generateComputerChoice()
getResult()
}));

function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random() * 3) + 1;
if(randomNumber === 1){
  computerChoice = "rock"
}
if(randomNumber === 2)
{
  computerChoice = "scissors"
}
if(randomNumber === 3)
{
  computerChoice ="paper"
}
computerChoiceDisplay.innerHTML =computerChoice;
getResult()
}

function getResult(){
  if (computerChoice === userChoice){
    result = "its a draw!"
  }
  if (computerChoice === "rock" && userChoice === "paper"){
    result = "you win!"
  }
  if (computerChoice === "rock" && userChoice === "scissors"){
    result = "you lose!"
  }
  if (computerChoice === "paper" && userChoice === "scissors"){
    result = "you win!"
  }
  if (computerChoice === "paper" && userChoice === "rock"){
    result = "you lose!"
  }
  if (computerChoice === "scissors" && userChoice === "rock"){
    result = "you win!"
  }
  if (computerChoice === "scissors" && userChoice === "paper"){
    result = "you lose!"
  }
  resultShow.innerHTML = result;
}
// second practice
const cardArray =[
  {
    name: 'doughnut',
    img: '/excite1.jpg',
  },
  {
    name: 'eggroll',
    img: '/excite2.jpg',
  },
  {
    name: 'cheese',
    img: '/excite3.jpg',
  },
  {
    name: 'grape',
    img: '/letter2.jpg',
  },
  {
    name: 'pie',
    img: '/letter1.jpg',
  },
  {
    name: 'fries',
    img: '/letter3.jpg'
  },
  {
    name: 'newsletter',
    img: '/letter4.jpg'
  },
  {
    name: 'graphics',
    img: '/Kao.jpg'
  },
  {
    name: 'logo',
    img: '/bakery-logo.jpg'
  },
  {
    name: 'bread',
    img: '/BREAD1.jpg'
  },
  {
    name: 'design',
    img: '/ux.jpg'
  },
  {
    name: 'display',
    img: '/Aui.jpg'
  }
]
console.log(cardArray);

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
let cardChoosen = []
let cardChoosenByIds = []
const cardsWon = []
const resultDisplay = document.getElementById('result1')

function createBoard(){
  for (let i = 0; i < cardArray.length; i++){
   const card = document.createElement('img');//create js method
   card.setAttribute('src', "/excite1.jpg");
   card.setAttribute('data-id', i)
   card.addEventListener('click', flipCard)
   gridDisplay.appendChild(card)
  }
}
createBoard()

function checkMatch(){
  const cards = document.querySelectorAll('img')
  const optionOneId = cardChoosen[0]
  const optionTwoId = cardChoosen[1]
  console.log(cards)
  console.log('check for match')
  if (optionOneId == optionTwoId){
    cards[optionOneId].setAttribute('src', "/Aui.jpg")
    cards[optionTwoId].setAttribute('src', "/Aui.jpg")
    alert('You found a match')
  }
  if (cardChoosen[0] == cardChoosen[1]){
    alert('You found a match')
    cards[optionOneId].setAttribute('src', '/excite1.jpg')
    cards[optionTwoId].setAttribute('src', '/excite1.jpg')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardChoosen)
  }else{
    cards[optionOneId].setAttribute('src', '/Aui.jpg')
    cards[optionTwoId].setAttribute('src', '/Aui.jpg')
    alert('Try again')

  }
  resultDisplay.textContent = cardsWon.length
  cardChoosen = []
  cardChoosenByIds = []

  if(cardsWon.length == cardArray.length/2){
resultDisplay.textContent = "Awesome, you did a good job"
  }
}
function flipCard(){
  //'this' will help us get any element we click
  console.log(cardArray)
  const cardId = this.getAttribute('data-id')
  console.log(cardArray[cardId].name)

console.log('clicked', cardId)
 
}