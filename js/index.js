import { getDataFromAPI } from "./getData.js";

const cityWhereToShowWeather = "Lviv";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityWhereToShowWeather}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

getDataFromAPI(url);
