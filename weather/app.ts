const apiKey = 'cb1529bde9cd758d5db5e37349ac4121'; 


async function getWeather(city: string): Promise<void> {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    
    if (!response.ok) {
      throw new Error('City not found!');
    }

    
    const data = await response.json();
    console.log(data);  

    
    const temperature = data.main.temp;
    const weatherCondition = data.weather[0].description;
    const humidity = data.main.humidity;
    const cityName = data.name;

    
    document.getElementById('city-name')!.textContent = cityName;
    document.getElementById('temperature')!.textContent = temperature.toFixed(1);
    document.getElementById('weather-condition')!.textContent = weatherCondition;
    document.getElementById('humidity')!.textContent = humidity.toString();

    
    document.getElementById('weather-result')!.classList.remove('hidden');
    document.getElementById('error-message')!.classList.add('hidden');
  } catch (error) {
    console.error(error);  

    
    document.getElementById('error-message')!.classList.remove('hidden');
    document.getElementById('weather-result')!.classList.add('hidden');
  }
}


document.getElementById('getWeatherBtn')?.addEventListener('click', () => {
  const city = (<HTMLInputElement>document.getElementById('city')).value.trim();
  
  if (city) {
    getWeather(city);
  } else {
    alert('Please enter a city name!');
  }
});
