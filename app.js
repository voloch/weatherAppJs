let key = "c6f2f96ea4578840aac561a550ec7864";
const weatherApi = "http://api.openweathermap.org/data/2.5/weather?q=Lappeenranta&units=metric&appid=c6f2f96ea4578840aac561a550ec7864";

// api.openweathermap.org/data/2.5/weather?q=Lappeenranta&appid=c6f2f96ea4578840aac561a550ec7864
fetch(weatherApi)

.then((Response) => {
  return Response.json();  
})
.then((Response) =>{
  document.getElementById('degree').innerHTML=Response.main.temp;
  console.log(Response);
})
.catch(err => console.error(err));

//document.getElementsByClassName('').innerHTML = ;