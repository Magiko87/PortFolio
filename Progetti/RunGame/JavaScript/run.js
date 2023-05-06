const hero = document.querySelector(".hero");
const heroG = document.querySelector(".heroG");
const iron = document.querySelector(".iron");

const jump = () => {
    if (hero.classList != "animate") {
        hero.classList.add("animate");
        iron.style.animation = "move 1s infinite linear";

    }
    setTimeout(() => {
        hero.classList.remove("animate"); 
    }, 300);
};

document.addEventListener("keydown" , (e) => {
    if (e.code == "Space") {
        jump();
    }

});
window.addEventListener("click" , () => {
     {jump(); }

});
