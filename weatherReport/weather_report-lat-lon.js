function showweatherDetailsLatLon(event) {
      event.preventDefault();

      const apiKey = 'ce951a73ebb558df179ca84b777aabd1'; 
      let lat = document.getElementById("lat").value;
      let lon = document.getElementById("lon").value;
                
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfoByLat-Lon');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                 <p>Temperature: ${data.main.temp} &#8451;</p>
                                 <p>Weather: ${data.weather[0].description}</p>`;
      })
     .catch(error => {
                console.error('Error fetching weather:', error);
                const weatherInfo = document.getElementById('weatherInfoByLat-Lon');
                weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
     });                      
  }
document.getElementById('weatherForm').addEventListener('submit',showweatherDetailsLatLon );