let key = "c6f2f96ea4578840aac561a550ec7864";
const weatherApi = "http://api.openweathermap.org/data/2.5/weather?q=Lappeenranta&units=metric&appid=c6f2f96ea4578840aac561a550ec7864";

// api.openweathermap.org/data/2.5/weather?q=Lappeenranta&appid=c6f2f96ea4578840aac561a550ec7864
fetch(weatherApi)

.then((Response) => {
  return Response.json();  
})
.then((Response) =>{
  document.getElementById('degree').innerHTML=Response.main.temp + " ºC";
  console.log(Response);

  //icons
  let iconString = "http://openweathermap.org/img/wn/"+Response.weather[0].icon+"@2x.png";
  console.log(iconString);
  document.getElementById('weatherIcon').src=iconString;

  //description
  document.getElementById('description').innerHTML=Response.weather[0].description;
  
})
.catch(err => console.error(err));

//document.getElementsByClassName('').innerHTML = ;


