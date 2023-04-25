const apiKey = "cf7543021c5096cf8d75b92eeb63e205";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{
        var data = await response.json();
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
        document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=Math.round( data.wind.speed)+"km";
       
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src = "./Immagini/clouds.png";
            
       }
       else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "./Immagini/clear.png";
       }
       else if(data.weather[0].main =="Rainar"){
        weatherIcon.src = "./Immagini/rain.png";
       }
       else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "./Immagini/drizzle.png";
       }
       else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "./Immagini/mist.png";
       }
       document.querySelector(".weather").style.display ="block";
       document.querySelector(".error").style.display ="none";

    }
        var data = await response.json();
        

    
   


    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
    document.querySelector(".wind").innerHTML= data.wind.speed+"km/h";
   
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "./immagini/clouds.png";
        
   }
   else if(data.weather[0].main =="Clear"){
    weatherIcon.src = "./immagini/clear.png";
   }
   else if(data.weather[0].main =="Rainar"){
    weatherIcon.src = "./immagini/rain.png";
   }
   else if(data.weather[0].main =="Drizzle"){
    weatherIcon.src = "./immagini/drizzle.png";
   }
   else if(data.weather[0].main =="Mist"){
    weatherIcon.src = "./immagini/mist.png";
   }
   document.querySelector(".weather").style.display ="block";
   document.querySelector(".error").style.display = "none";
    
    
}
searchBtn.addEventListener("click",() =>{
    checkWeather(searchBox.value);
})
