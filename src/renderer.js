const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=53.20&longitude=50.15&current_weather=true';
let isCelsius = true;

window.addEventListener('DOMContentLoaded', async () => {
    const temp1El = document.getElementById('temp1');
    const temp2El = document.getElementById('temp2');
    const locEl = document.getElementById('location');
    const toggleBtn = document.getElementById('toggle');

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        const tempC = data.current_weather.temperature;
        const tempF = (tempC * 9 / 5) + 32;

        const updateTemps = () => {
            const text = isCelsius ? `${tempC.toFixed(1)}°C` : `${tempF.toFixed(1)}°F`;
            temp1El.textContent = text;
            temp2El.textContent = text;
        };

        updateTemps();
        locEl.textContent = "Самара";

        toggleBtn.onclick = () => {
            isCelsius = !isCelsius;
            updateTemps();
        };
    } catch (err) {
        locEl.textContent = "Ошибка загрузки";
        temp1El.textContent = '--°';
        temp2El.textContent = '--°';
    }
});
