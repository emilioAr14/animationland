const root = document.querySelector(".phone");
const bunnies = document.querySelectorAll(".bunny");
const bunnyBtn = document.querySelectorAll(".bunny__btn");
const gameDescription = document.querySelector(".game-description");
const scoreSpan = document.querySelector(".score span");
const scoreText = document.querySelector(".score");
const startBtn = document.querySelector(".start-btn");

let score = 0;
let isFirstGame = true;

const renderGame = () => {
    if(isFirstGame) {
        scoreText.style.visibility = "hidden";
        gameDescription.innerText = `Catch as many bunnies as 
                                    you can in 10 secs`;
        startBtn.innerText = "Start";
    } else {
        gameDescription.innerText = "Time!!!";
        startBtn.innerText = "Play again";
    }
    startBtn.style.display = "block"

    bunnies.forEach((bunny) => {
        bunny.classList.toggle("animation-off");
    });

}

const totalScore = () => {
    score += 1;
    scoreSpan.innerHTML = score;
}

const bunnyClick = ({target}) => {
    if(target.className === "bunny__btn") {
        totalScore();
    }
}

startBtn.addEventListener("click", () => {
    root.addEventListener("click", bunnyClick);

    isFirstGame = false;
    score = 0;
    scoreSpan.innerText = score;
    startBtn.style.display = "none";
    gameDescription.style.display = "none";
    scoreText.style.visibility = "visible";

    bunnies.forEach((bunny) => {
        bunny.classList.toggle("animation-off");
    });

    setTimeout(() => {
        gameDescription.style.display = "block";
        root.removeEventListener("click", bunnyClick);
        renderGame();
    }, 10000);
});

renderGame();



// bunnyBtn.forEach((element) => {
//     element.addEventListener("click", totalScore)
// });