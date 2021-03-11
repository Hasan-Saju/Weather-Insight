window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(long);
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=b9810e52e576d66ababa1848cc65b8e5`;

            fetch(api)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                });
        });


    }
});