// Creazione della matrice buttons per aggiunta dei pulsanti 

const buttons = [];
//Fine

//Creazione della variabile counter per tenere traccia e aggiornare il valore del contatore.
let counter = 0;
//Fine

//Seleziona un elemento HTML con l'ID "count" e lo assegna alla variabile count.
const count = document.querySelector("#count");
//Fine

//Funzione  che imposta il testo dell'elemento selezionato con l'ID "count" con il valore corrente della variabile counter
function updateCounter() {
  count.innerText = counter;
}

updateCounter();
//Fine

//Consente di selezionare un elemento HTML con classe "buttons" per poterlo manipolare
let buttonsContainer = document.querySelector('.buttons');
//Fine

// Inizio crazione dei bottoni dinamicamente:
const subtractButton = document.createElement("button");
//Subtract
subtractButton.innerText = "Subtract";
subtractButton.classList.add("subtract", "btn");


const addButton = document.createElement("button");
//Add
addButton.innerText = "Add";
addButton.classList.add("add", "btn");

const resetButton = document.createElement("button");
//Reset
resetButton.innerText = "Reset";
resetButton.classList.add("reset", "btn");
// Fine creazione bottoni js

// creazione elementi <i>:
const subtractIcon = document.createElement('i');
subtractIcon.classList.add('fa-solid', 'fa-arrow-down', 'fa-2xs');

const resetIcon = document.createElement('i');
resetIcon.classList.add('fa-solid', 'fa-power-off', 'fa-flip', 'fa-xs');
const addIcon = document.createElement('i');

addIcon.classList.add('fa-solid', 'fa-arrow-up', 'fa-2xs');
// fine creazione elementi >i>

// Aggiunta degli elementi <i> ai pulsanti
subtractButton.prepend(subtractIcon);
resetButton.prepend(resetIcon);
addButton.prepend(addIcon);
//fine aggiunta elementi <i> ai pulsanti


//Ad ogni evento del click, viene invocata la funzione che aggiorna il contatore, il colore del contatore, 
//visualizza il valore del contatore e riproduce un effetto sonoro.
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
//Fine

//Ad ogni evento del tasto della tastiera, viene invocata la funzione che aggiorna il contatore, il colore del contatore, 
//visualizza il valore del contatore e riproduce un effetto sonoro.
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
//Fine

//Aggiunta dei pulsanti alla matrice buttons
buttons.push(subtractButton);
buttons.push(resetButton);
buttons.push(addButton);
//Fine

//Assicura che i pulsanti presenti nella matrice buttons vengano aggiunti al contenitore HTML 
//con la classe "buttons" 
//una volta che il documento HTML è  caricato. 
document.addEventListener('DOMContentLoaded', () => {
  buttons.forEach((button) => {
    buttonsContainer.appendChild(button)
  });
});
//Fine

//Funzione del colore
function setColor(){
    if(counter > 0){
        count.style.color = "green";
    } else if (counter < 0){
        count.style.color = "red";
    } else{
        count.style.color = "white";
    }
}
//Fine

//Funzione del suono
function sound() {
  const audio = new Audio("./Suoni/mixkit-handgun-click-1660.mp3");
  audio.currentTime = 0.0;
  audio.play();
  setTimeout(function() {
      audio.pause();
  }, 1000);
}
//Fine