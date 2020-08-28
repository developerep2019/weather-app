const cityNameString = document.getElementById('cityNameString').value;

const city = () => {
    return cityNameString;
}


function fetchDataFromServer() {
    // const mainAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city()}&appid=d6d47722dc3390a6963bb96230a71b82`;

    if(cityNameString == '' || cityNameString == ' ') {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=d6d47722dc3390a6963bb96230a71b82`)
        .then(response => response.json())
        .then(data => {
            // Main Temp Checker
            const tempGater = data.main
            const mainTemp = tempGater.temp;
            const tempCelcius = mainTemp - 273.15;
            document.getElementById('temp').innerText = tempCelcius.toFixed(2);
    
            // City Name Checker
            document.getElementById('cityName').innerText = data.name;
            
            // Weather Type Checker
            const weatherType = data.weather[0];
            document.getElementById('weatherType').innerText = weatherType.main;
    
        })
    }
    else {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city()}&appid=d6d47722dc3390a6963bb96230a71b82`)
        .then(response => response.json())
        .then(data => {
            // Main Temp Checker
            const tempGater = data.main
            const mainTemp = tempGater.temp;
            const tempCelcius = mainTemp - 273.15;
            document.getElementById('temp').innerText = tempCelcius.toFixed(2);
    
            // City Name Checker
            document.getElementById('cityName').innerText = data.name;
            
            // Weather Type Checker
            const weatherType = data.weather[0];
            document.getElementById('weatherType').innerText = weatherType.main;
    })
    


}}