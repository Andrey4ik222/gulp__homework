export function showWeather(data) {
  const {
    name,
    main: { temp, pressure, humidity },
    weather: [{ description, icon }],
    wind: { speed, deg },
  } = data;

  setInnerHTML("city", `City: ${name}`);
  setInnerHTML("temp", `Temperature: ${temp}°C`);
  setInnerHTML("pressure", `Pressure: ${pressure} mm Hg`);
  setInnerHTML("description", `Description: ${description}`);
  setInnerHTML("humidity", `Humidity: ${humidity}%`);
  setInnerHTML("speed-wind", `Wind speed: ${speed}m/s`);
  setInnerHTML("deg-wind", `Wind direction: ${deg}°`);
  document
    .getElementById("icon")
    .setAttribute("src", `http://openweathermap.org/img/w/${icon}.png`);
}
function setInnerHTML(id, text) {
  document.getElementById(id).innerHTML = text;
}
