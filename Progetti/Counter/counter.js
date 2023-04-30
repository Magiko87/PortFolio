const count=document.querySelector(".count");
const add=document.querySelector(".add");
const resetCount=document.querySelector(".reset");
const sub=document.querySelector(".subtract");

function setColor(){
    if(count.innerHTML >0){
        count.style.color = " green";}
        else if (count.innerHTML<0){
            count.style.color = "red";

        }else{
            count.style.color ="white";
        }
           
    
    }


function keysPressed(){
    if(event.key == "ArrowLeft"){
        count.innerHTML--;
        setColor()
    }

    if(event.key == "ArrowRight"){
        count.innerHTML++;
        setColor()
    }
    if(event.key == "Enter"){
        count.innerHTML= 0;
        setColor()
    }
    
}



window.addEventListener("keydown",
keysPressed)




add.addEventListener("click", ()  => {
    count.innerHTML++;
    setColor()
})
sub.addEventListener("click", ()  => {
    count.innerHTML--;
    setColor()
})
resetCount.addEventListener("click", ()  => {
    count.innerHTML= 0;
    setColor()
})
 