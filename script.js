document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=ed62027f47f8dfb9f5baef0fcaee1ae3&units=metric')
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather-info').innerHTML = `Temperature in London: ${data.main.temp} °C`;
        })
        .catch(error => {
            document.getElementById('weather-info').innerHTML = 'Weather data unavailable';
        });
});
