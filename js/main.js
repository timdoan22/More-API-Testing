const OPENWEATHER_API_KEY = config.OPENWEATHER_API_KEY
const GOOGLE_API_KEY = config.GOOGLE_MAPS_KEY

document.getElementById('search').addEventListener('click', getGeoData)

function getGeoData() {
    const country = document.querySelector('input').value
    let latitude = 0
    let longitude = 0


    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => {
        latitude = data[0].latlng[0]
        longitude = data[0].latlng[1]
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('temperature').classList.toggle('hidden')
            document.getElementById('weatherDesc').classList.toggle('hidden')
            document.getElementById('temperature').innerText += ` ${(data.main.temp - 273.15).toFixed(2)} Cesius`
            document.getElementById('weatherDesc').innerText += ` ${data.weather[0].main.toLowerCase()} - ${data.weather[0].description}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
        
        document.querySelector('h2').innerText = `${data[0].name.common} ${data[0].flag}`
        document.querySelector('iframe').classList.toggle('hidden')
        document.querySelector('iframe').src = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=${country}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}