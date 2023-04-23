const api = {
    key:"cf7543021c5096cf8d75b92eeb63e205",
    base: "https://api.openweathermap.org/data/3.0/"
}
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", getInput);

function getInput (event) {
    event.preventDefault();
    if (event.type == "click"){
        getData(search.value);
        console.log(search.value);


    }
}
function getData(){
    fetch(`${api.base}weathwer?q=${search.value}&
    units=metric&appid=${api.key}`)
       .then(response =>{
            return response.json();

    }).then(displayData);

}
function displayData (response){
    //console.log(response);
    if (response.cod === "404"){
        const error = document.querySelector(".error");
        error.textContent="Inserisci una città valida";
        search.value="";
    }else {
        const city = document.querySelector(".city");
        city.innerText = `${response.name},${response.sys.country}`;

        const today= new Date();
        const date= document.querySelector(".date");
        date.innerText=dateFunction(today);

        const temp = document.querySelector(".temp");
        temp.innerHTML= `Temp:${Math.round(response.main,temp)}
        <span>°C</span> `; 
        const weather = document.querySelector(".weather");
        weather.innerText=`weather: ${response.weather[0],
        main}`;

        const tempRange = document.querySelector(".temp-range");
        tempRange.innerText=`Temp Range:${Math.round(response.main.temp_min)}°C/
        ${Math.round(response.main.temp_max)}°C`;

        constweatherIcon = document.querySelector(".weather-icon");
        const iconURL ="http://openweathermap.org/img/w/";
        weatherIcon.src =iconURL + response.weather[0].
        icon+".png";
        search.value ="";
    }
}
 function dateFunction (d){
    let month = ["Gen","Feb","Mar","Apr","Mag",
    "Giu","Lug","Ago","Set","Ott","Nov","Dic"];

    let days =["Lun","Mar","Mer",
    "Gio","Ven","Sab","Dom"];

    let day =days[d.getDay()];
    let date =d.getDate();
    let month =d.getMonth();
    let year = d.getFullYear();
    
    return `${day},${month},${year}`; 
 }