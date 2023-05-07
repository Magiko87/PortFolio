const hero = document.querySelector(".hero");
const heroG = document.querySelector(".heroG");
const iron = document.querySelector(".iron");
var score = 0;

function updateScore() {
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
}



const jump = () => {
    if (hero.classList != "animate") {
        hero.classList.add("animate");
        iron.style.animation = "move 1s infinite linear";

    }
    setTimeout(() => {
        hero.classList.remove("animate");
    }, 300);
    updateScore();

};
setInterval(() => {
    updateScore();
}, 1000);

document.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
        jump();
    }

});
window.addEventListener("click", () => {
    { jump(); }

});
let isAlive = setInterval(() => {
    let heroTop = parseInt(window.getComputedStyle(hero).
        getPropertyValue("top"));
    // console.log(heroTop);
    let ironLeft = parseInt(window.getComputedStyle(iron).
        getPropertyValue("left"));

    if (ironLeft < 30 && ironLeft > 20 && heroTop >= 130) {
        iron.style.animation = "none"
        alert("Game Over!!Press spacebar to start");
        score = 0;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
}, 10);
