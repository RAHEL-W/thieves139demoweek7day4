const API_key  = '37b430deb7fe66a35f44d4a7d7bc40da'


const getToken =  async (city_name) =>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=imperial&humidity=humidity.unit`)
    
   
    const data = await response.json()
    const weather_data ={
     Location : data.name,   
     High:data.main.temp_max,
     Low : data.main.temp_min,
     Forecast : data.weather[0].main,
     Humidity  : data.main.humidity,
     Wind_speed : data.wind.speed,
     Tempratur : data.main.temp,
     Icon: data.weather[0].icon

   
    }
    console.log(data)
    return weather_data
    
}



getToken('London')


  


const form = document.querySelector('form')
const card = document.querySelector('#card')
console.log(form)
form.addEventListener('submit', async (event) =>{

    event.preventDefault()
    const city_name = form[0].value.toUpperCase()
    const weather_data = await getToken(city_name)

    
    card.innerHTML = `
    <div class="Location_Tempratur">
      <h1>${weather_data.Location}</h1>
      <h1>${weather_data.Tempratur} °</h1>
      <img src="http://openweathermap.org/img/wn/${weather_data.Icon}@2x.png" alt="Weather Icon">
    </div>
  
    <div class="Forecast_High_Low">
      <h3>${weather_data.Forecast}</h3>
      <div id="High_Low">
        <h3>H:${weather_data.High} °</h3>
        <h3>L:${weather_data.Low} °</h3>
      </div>
    </div>
  
    <div class="Humidity_Wind_speed">
      <div class="Humidity">
        <img src="https://static.thenounproject.com/png/985548-200.png">
        <div class="Humidity_p">
          <p>${weather_data.Humidity}%</p>
          <p>Humidity</p>
        </div>
      </div>
  
      <div class="Wind_speed">
        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/wind-speed-2295713-1939049.png">
        <div class="Wind_speed_p">
          <p>${weather_data.Wind_speed} km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  `;
  
    const body = document.body;

    switch (weather_data.Forecast.toLowerCase()) {
      case 'clear':
        body.style.background = "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)"; // sunny blue
        break;
      case 'clouds':
        body.style.background = "linear-gradient(to top, #bdc3c7 0%, #2c3e50 100%)"; // cloudy gray
        break;
      case 'rain':
        body.style.background = "linear-gradient(to top, #667db6 0%, #485563 100%)"; // rainy tone
        break;
      case 'snow':
        body.style.background = "linear-gradient(to top, #e6dada 0%, #274046 100%)"; // snowy white-gray
        break;
      case 'thunderstorm':
        body.style.background = "linear-gradient(to top, #141e30 0%, #243b55 100%)"; // stormy dark
        break;
      case 'mist':
      case 'fog':
        body.style.background = "linear-gradient(to top, #3e5151 0%, #decba4 100%)"; // foggy beige
        break;
      default:
        body.style.background = "linear-gradient(to top, #89f7fe 0%, #66a6ff 100%)"; // default sky
    }
    
    body.style.transition = "background 1s ease-in-out";
    

})



