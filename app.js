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
     Tempratur : data.main.temp

   
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
    </div>
    <div class="Forecast_High_Low">
    <h3>${weather_data.Forecast} </h3>
    <div id="High_Low">
    <h3>H:${weather_data.High} °</h3>
    <h3>L:${weather_data.Low} °</h3>
    </div>
    </div>
    <div class="Humidity_Wind_speed">
   <div class="Humidity">
    
    <img src="https://static.thenounproject.com/png/985548-200.png">
    <div class ="Humidity_p"
    <p>${weather_data.Humidity }%</p>
    <p> Humidity </p>
    </div>
    </div>

    <div class="Wind_speed">
    
    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/wind-speed-2295713-1939049.png">
    <div class ="Wind_speed_p"
    <p>  ${weather_data.Wind_speed } km/h</p>
    <p> Wind speed </p>
    </div>
    </div>
   </div>
    

    
    
    
    
    `



})



