const apiKey = '#Enter your apiKey';  
let city = 'London';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=$#your apiKey`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
