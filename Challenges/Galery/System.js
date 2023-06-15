const images = ["Rexouium.jpg", "Wolf.png", "Fox.jpg", "dragon.png", "cat.png", "protogen.jpg","Rexouium.jpg", "Wolf.png", "Fox.jpg", "dragon.png", "cat.png", "protogen.jpg"];
let CurrentImage = 0;
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const imageElement = document.querySelector(".image");
function displayImage() {
    imageElement.src = images[CurrentImage];
}
prevButton.addEventListener("click", () => {
    CurrentImage--;
    if (CurrentImage < 0) {
        CurrentImage = images.length - 1;
    }
    displayImage();
});
nextButton.addEventListener("click", () => {
    CurrentImage++;
    if (CurrentImage >= images.length) {
        CurrentImage = 0;
    }
    displayImage();
});
displayImage();
