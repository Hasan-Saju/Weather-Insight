window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let weatherImage = document.querySelector('#weatherImage');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(long);
            const api = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=b9810e52e576d66ababa1848cc65b8e5`;


            fetch(api)
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    const temperature = data['main']['temp'] - 273.15;
                    const summary = data['weather'][0]['description'];
                    const city = data['name'];
                    const country = data['sys']['country'];
                    const icon = data['weather'][0]['icon'];

                    // console.log(city);
                    // console.log(temperature);
                    // console.log(summary);
                    const weatherImageURL = `http://openweathermap.org/img/w/${icon}.png`;

                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = `${city}, ${country}`;
                    weatherImage.src = weatherImageURL;
                });
        });


    }


});

var tempCelsius = document.querySelector('.temperature-degree');
value = parseFloat(tempCelsius.innerHTML)

const convertFarenheit = () => {
    let faren = ((9 * value) / 5) + 32;
    tempCelsius.textContent = faren;
    let unit = document.querySelector('span');
    unit.innerHTML = 'F';
}