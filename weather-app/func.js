

const apikey= "dd361221a4e42730890a51d143b6ec30";
const api="https://api.openweathermap.org/data/2.5/weather?units=metric&q";
const clickk = document.querySelector(".search button");
const city = document.querySelector(".search input");
const weth=document.querySelector(".weather-icon");

async function getweather(city) 
{
    const response = await fetch(api +  `=${city}` + `&appid=${apikey}`);
    if(response.status==404)
    {
        alert("City Not Found");
        return;
    }
    var data= await response.json();

    var tempv=data.main.temp;
    tempv=Math.round(tempv);

     console.log(data);

     document.querySelector(".name").innerHTML=data.name;
     document.querySelector(".temp").innerHTML=tempv + " °C";
     document.querySelector(".windv").innerHTML=data.wind.speed + " m/s"
     document.querySelector(".humv").innerHTML=data.main.humidity + "%"

     if(data.weather[0].main=="Clouds")
     {
         weth.src="./images/clouds.png";
     }else if(data.weather[0].main=="Clear")
     {
         weth.src="./images/clear.png";
     }else if(data.weather[0].main=="Rain")
     {
         weth.src="./images/rain.png";
     }else if(data.weather[0].main=="Drizzle")
     {
         weth.src="./images/drizzle.png";
     }else if(data.weather[0].main=="Mist")
     {
         weth.src="./images/mist.png";
     }


     

}

clickk.addEventListener("click", () => {
    getweather(city.value);
});
