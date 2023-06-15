const images = ["Rexouium.jpg", "Wolf.png", "Fox.jpg", "dragon.png", "cat.png", "protogen.jpg","Rexouium.jpg", "Wolf.png", "Fox.jpg", "dragon.png", "cat.png", "protogen.jpg"]
const shuffledImages = shuffle(images);
const imagesContainer = document.getElementById("images");
shuffledImages.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = "gray-square.jpg";
    imgElement.dataset.image = image;
    imagesContainer.appendChild(imgElement);
});
let flippedCards = [];
let matchedCards = [];
let turns = 0;
const images = document.querySelectorAll("#images img");
images.forEach((image) => {
    image.addEventListener("click", flipCard);
});
function flipCard() {
    if (flippedCards.length < 2 && !flippedCards.includes(this) && !matchedCards.includes(this)) {
        this.src = `images/${this.dataset.image}`;
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}
function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.image === card2.dataset.image) {
        matchedCards.push(card1, card2);
    } else {
        card1.src = "gray-square.jpg";
        card2.src = "gray-square.jpg";
    }
    flippedCards = [];

    turns++;
    if (matchedCards.length === shuffledImages.length) {
        showResults();
    }
}
function showResults() {
    alert(`won in ${turns} turns.`);
}
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
