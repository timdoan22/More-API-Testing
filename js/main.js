document.getElementById('search').addEventListener('click', getMap)

function getMap() {
    const country = document.querySelector('input').value

    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('h2').innerText = `${data[0].name.common} ${data[0].flag}`
        document.querySelector('iframe').classList.toggle('hidden')
        document.querySelector('iframe').src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBfSsiOep5dUreACARWIRtM81bcnhFuMx4&q=${country}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}