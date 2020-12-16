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

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var cardContainer = document.createElement("div");
      cardContainer.classList.add("flip-card");
      cardContainer.setAttribute("data-id", i);

      const pathToStockImg = "./img/box.png";
      var card = `      	<div class="flip-card-inner">
      	  <div class="flip-card-front">
      		<img class="front-img" src="${pathToStockImg}">
      	  </div>
      	  <div class="flip-card-back">
      		<img class="back-img" src="${cardArray[i].img}">
      	  </div>
      	</div>`;

      cardContainer.innerHTML = card;

      cardContainer.addEventListener("click", flipCard);
      grid.appendChild(cardContainer);
    }
    
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll(".flip-card");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].classList.remove('flipped');
      cards[optionTwoId].classList.remove('flipped');
      
    } else if (cardsChosen[0] === cardsChosen[1]) {
      
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cards[optionOneId].classList.add("card-disabled");
      cards[optionTwoId].classList.add("card-disabled");
      cardsWon.push(cardsChosen);
    } else {
		cards[optionOneId].classList.remove('flipped');
		cards[optionTwoId].classList.remove('flipped');
    
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
	this.classList.add('flipped');
	var cardId = this.getAttribute("data-id");
	
    cardsChosen.push(cardArray[cardId].name);
	cardsChosenId.push(cardId);

	this.querySelector(".flip-card-back .back-img").setAttribute("src", cardArray[cardId].img)

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
