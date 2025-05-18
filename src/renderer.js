const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=53.20&longitude=50.15&current_weather=true';
let isCelsius = true;

window.addEventListener('DOMContentLoaded', async () => {
    const tempEl = document.getElementById('temperature');
    const locEl = document.getElementById('location');
    const toggleBtn = document.getElementById('toggle');

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        const tempC = data.current_weather.temperature;
        const tempF = (tempC * 9 / 5) + 32;

        tempEl.textContent = `${tempC.toFixed(1)}°C`;
        locEl.textContent = "Самара";

        toggleBtn.onclick = () => {
            isCelsius = !isCelsius;
            tempEl.textContent = isCelsius ? `${tempC.toFixed(1)}°C` : `${tempF.toFixed(1)}°F`;
        };
    } catch (err) {
        locEl.textContent = "Ошибка загрузки";
    }
});
