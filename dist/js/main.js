function getDataFromAPI(e){fetch(e).then(e=>{if(e.ok)return e.json();throw new Error("Network response was not ok")}).then(e=>{showWeather(e)}).catch(e=>{console.error("Error:",e)})}const cityWhereToShowWeather="Lviv",url=`https://api.openweathermap.org/data/2.5/weather?q=${cityWhereToShowWeather}&units=metric&APPID=5d066958a60d315387d9492393935c19`;function showWeather(e){var{name:e,main:{temp:t,pressure:r,humidity:n},weather:[{description:i,icon:o}],wind:{speed:s,deg:a}}=e;setInnerHTML("city","City: "+e),setInnerHTML("temp",`Temperature: ${t}°C`),setInnerHTML("pressure",`Pressure: ${r} mm Hg`),setInnerHTML("description","Description: "+i),setInnerHTML("humidity",`Humidity: ${n}%`),setInnerHTML("speed-wind",`Wind speed: ${s}m/s`),setInnerHTML("deg-wind",`Wind direction: ${a}°`),document.getElementById("icon").setAttribute("src",`http://openweathermap.org/img/w/${o}.png`)}function setInnerHTML(e,t){document.getElementById(e).innerHTML=t}getDataFromAPI(url);