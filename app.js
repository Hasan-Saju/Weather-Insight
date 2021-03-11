loadWebsite();
function loadWebsite() {

    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let weatherImage = document.querySelector('#weatherImage');

    var cityName = document.querySelector("#cityName").value;
    cityName = cityName.toLowerCase();


    // first time dhaka will be loaded
    if (cityName.length == 0) {
        cityName = 'dhaka';
    }



    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b9810e52e576d66ababa1848cc65b8e5`;


    fetch(api)
        .then(response => response.json())
        .then(data => {

            const temperature = data['main']['temp'] - 273.15;
            const summary = data['weather'][0]['description'];
            const city = data['name'];
            const country = data['sys']['country'];
            const icon = data['weather'][0]['icon'];


            const weatherImageURL = `http://openweathermap.org/img/w/${icon}.png`;

            temperatureDegree.textContent = temperature.toFixed(2);
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = `${city}, ${country}`;
            weatherImage.src = weatherImageURL;
        });

}



const convertFarenheit = () => {


    var temp = document.querySelector('.temperature-degree');
    var unit = document.querySelector('span');
    value = parseFloat(temp.innerHTML)

    if (unit.innerHTML == 'C') {
        let faren = ((9 * value) / 5) + 32;
        faren = faren.toFixed(2);
        temp.textContent = faren;

        unit.innerHTML = 'F';
    }
    else {
        let celsius = ((value - 32) / 9) * 5;
        celsius = celsius.toFixed(2);
        temp.textContent = celsius;

        unit.innerHTML = 'C';
    }


}


const searchEngine = () => {
    var city = document.querySelector("#cityName").value;
    cityName = city;
    loadWebsite();
}

