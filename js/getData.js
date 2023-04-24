import { showWeather } from "./showWeather.js";

export function getDataFromAPI(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      showWeather(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
