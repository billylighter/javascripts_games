document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "joker",
      img: "./img/joker.png",
    },
    {
      name: "king",
      img: "./img/king.png",
    },
    {
      name: "princess",
      img: "./img/princess.png",
    },
    {
      name: "executioner",
      img: "./img/executioner.png",
    },
    {
      name: "horse",
      img: "./img/horse.png",
    },
    {
      name: "gallow",
      img: "./img/gallow.png",
    },
    {
      name: "joker",
      img: "./img/joker.png",
    },
    {
      name: "king",
      img: "./img/king.png",
    },
    {
      name: "princess",
      img: "./img/princess.png",
    },
    {
      name: "executioner",
      img: "./img/executioner.png",
    },
    {
      name: "horse",
      img: "./img/horse.png",
    },
    {
      name: "gallow",
      img: "./img/gallow.png",
    },
  ];

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "./img/box.png");
      card.setAttribute("data-id", i);
      card.setAttribute("class", "card");
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
      cardArray.sort(() => 0.5 - Math.random());
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "./img/box.png");
      cards[optionTwoId].setAttribute("src", "./img/box.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
    //   cards[optionOneId].setAttribute("src", "./img/empty-block.png");
    //   cards[optionTwoId].setAttribute("src", "./img/empty-block.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cards[optionOneId].classList.add("card-disabled");
      cards[optionTwoId].classList.add("card-disabled");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "./img/box.png");
      cards[optionTwoId].setAttribute("src", "./img/box.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      alert("Congratulations! You found them all!");
      grid.innerHTML = "";
      resultDisplay.textContent = "0";
      createBoard();
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
