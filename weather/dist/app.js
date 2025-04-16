"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
const apiKey = 'cb1529bde9cd758d5db5e37349ac4121'; // Your OpenWeather API key
// Function to fetch weather data
function getWeather(city) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try {
            const response = yield fetch(url);
            // If the response is not OK, throw an error
            if (!response.ok) {
                throw new Error('City not found!');
            }
            // Parse the JSON data
            const data = yield response.json();
            console.log(data); // Log the response data to check if it's correct
            // Extract relevant data from the response
            const temperature = data.main.temp;
            const weatherCondition = data.weather[0].description;
            const humidity = data.main.humidity;
            const cityName = data.name;
            // Update the UI
            document.getElementById('city-name').textContent = cityName;
            document.getElementById('temperature').textContent = temperature.toFixed(1);
            document.getElementById('weather-condition').textContent = weatherCondition;
            document.getElementById('humidity').textContent = humidity.toString();
            // Show the weather result and hide the error message
            document.getElementById('weather-result').classList.remove('hidden');
            document.getElementById('error-message').classList.add('hidden');
        }
        catch (error) {
            console.error(error); // Log the error to the console
            // Show error message if something goes wrong
            document.getElementById('error-message').classList.remove('hidden');
            document.getElementById('weather-result').classList.add('hidden');
        }
    });
}
// Add event listener to the "Get Weather" button
(_a = document.getElementById('getWeatherBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const city = document.getElementById('city').value.trim();
    if (city) {
        getWeather(city);
    }
    else {
        alert('Please enter a city name!');
    }
});
