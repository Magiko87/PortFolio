const buttons = [];

let counter = 0;

const count = document.querySelector("#count");

function updateCounter() {
  count.innerText = counter;
}

updateCounter();

let buttonsContainer = document.querySelector('.buttons');


// Inizio crazione dei bottoni dinamicamente
const subtractButton = document.createElement("button");
subtractButton.innerText = "Subtract";
subtractButton.classList.add("subtract", "btn");

const addButton = document.createElement("button");
addButton.innerText = "Add";
addButton.classList.add("add", "btn");

const resetButton = document.createElement("button");
resetButton.innerText = "Reset";
resetButton.classList.add("reset", "btn");


// Fine creazione bottoni js


subtractButton.addEventListener("click", () =>{
    counter--;
    setColor();
    updateCounter()
    sound();
});

resetButton.addEventListener("click", () =>{
    counter = 0;
    setColor();
    updateCounter()
    sound();
});

addButton.addEventListener("click", () =>{
    counter++;
    setColor();
    updateCounter();
          sound();

});

document.addEventListener("keydown", function(event) {
    if(event.key == "ArrowLeft") {
      counter--;
      setColor();
      updateCounter();
      sound();
    }
    if(event.key == "ArrowRight") {
      counter++;
      setColor();
      updateCounter();
      sound();

    }
    if(event.key == "Enter") {
      counter = 0;
      setColor();
      updateCounter();
      sound();

    }
});

buttons.push(subtractButton);
buttons.push(resetButton);
buttons.push(addButton);

document.addEventListener('DOMContentLoaded', () => {
  buttons.forEach((button) => {
    buttonsContainer.appendChild(button)
  });
});

function setColor(){
    if(counter > 0){
        count.style.color = "green";
    } else if (counter < 0){
        count.style.color = "red";
    } else{
        count.style.color = "white";
    }
}
function sound() {
  const audio = new Audio("./Suoni/mixkit-handgun-click-1660.mp3");
  audio.currentTime = 0.0;
  audio.play();
  setTimeout(function() {
      audio.pause();
  }, 1000);
}