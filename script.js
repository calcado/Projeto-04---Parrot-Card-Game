let cardNumber;
let text = "Escolha entre 4 e 14 cartas para jogar, sendo um número par";
const picturesCards = [
  "parrot0",
  "parrot1",
  "parrot2",
  "parrot3",
  "parrot4",
  "parrot5",
  "parrot6",
];

const deck = [];
let firstCard, secondCard;

function validation() {
  if (
    isNaN(cardNumber) ||
    cardNumber % 2 !== 0 ||
    cardNumber < 4 ||
    cardNumber > 14
  ) {
    return true;
  }
}

function separative() {
  return Math.random() - 0.5;
}

function unturnCard() {
  firstCard.classList.remove("turn");
  secondCard.classList.remove("turn");

  firstCard = undefined;
  secondCard = undefined;
}

function turnCard(card) {
  if (firstCard === undefined) {
    firstCard = card;
    firstCard.classList.add("turn");
  } else {
    if (secondCard === undefined) {
      secondCard = card;
      secondCard.classList.add("turn");

      if (firstCard.innerHTML === secondCard.innerHTML) {
        console.log("acertou");
        firstCard =  undefined;
        secondCard = undefined;
      } else {
        console.log("errou");
        setTimeout(unturnCard, 2500)
      }
    }
  }
}

function setBoard() {
  const board = document.querySelector(".board");

  for (let i = 0; i < deck.length; i++) {
    board.innerHTML += `
            <li class="card" onclick='turnCard(this)'>
                <div class='front-face cardFace'>
                    <img src='imagens/front.png'>
                </div>
                <div class='back-face cardFace'>
                    <img src='imagens/${deck[i]}.gif'>
                </div>
            </li> `;
  }
}

function createDeck() {
  for (let i = 0; i < cardNumber / 2; i++) {
    let card = picturesCards[i];
    deck.push(card);
    deck.push(card);
  }

  console.log(deck);

  deck.sort(separative);

  setBoard();
}

function numberOfCards() {
  cardNumber = Number(prompt(text));
  while (validation()) {
    alert("Quantidade de cartas inválida");
    cardNumber = Number(
      prompt(`Por favor, escolha um número par entre 4 e 14`)
    );
  }
  console.log("arrumando o tabuleiro...");

  createDeck();
}

numberOfCards();
