'use strict';
const section = document.querySelector('.container');
const playerLivesCount = document.querySelector("span");
let playerLives = 0;

playerLivesCount.textContent = playerLives;

const getData = () => [
    {imgSrc: "img/img-circle.jpg", name: "circle"},
    {imgSrc: "img/img-circle-one.jpg", name: "circle"},
    {imgSrc: "img/img-girl.jpg", name: "girl"},
    {imgSrc: "img/img-girl-one.jpg", name: "girl"},
    {imgSrc: "img/img-square.jpg", name: "square"},
    {imgSrc: "img/img-square-one.jpg", name: "square"},
    {imgSrc: "img/img-triangle.jpg", name: "triangle"},
    {imgSrc: "img/img-triangle-one.jpg", name: "triangle"},
    {imgSrc: "img/img-aa.jpg", name: "aa"},
    {imgSrc: "img/img-aa-one.jpg", name: "aa"},
    {imgSrc: "img/img-dd.jpg", name: "dd"},
    {imgSrc: "img/img-dd-one.jpg", name: "dd"},
    {imgSrc: "img/img-ee.jpg", name: "ee"},
    {imgSrc: "img/img-ee-one.jpg", name: "ee"},
    {imgSrc: "img/img-ff.jpg", name: "ff"},
    {imgSrc: "img/img-ff-one.jpg", name: "ff"}    
]

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

let cardGenerator = () => {
    const cardData = randomize();
    // const cards = document.querySelectorAll(".card");

    cardData.forEach((item) => {
        const card = document.createElement("div");
        card.classList = "card";
        const face = document.createElement("img");
        face.classList = "face";
        const back = document.createElement("div");
        back.classList = "back";
        
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("transform");
            checkedCards(e);
        });
    });    
};


const checkedCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    playerLives++;
    playerLivesCount.textContent = playerLives;
    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            // console.log("working");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        } else {
            // console.log("not working");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("transform"), 1000);
            });
            
        }
    }
};

cardGenerator();