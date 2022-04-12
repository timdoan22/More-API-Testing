document.getElementById('search').addEventListener('click', getMap)

function getMap() {
    const country = document.querySelector('input').value

    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json()) //parse as JSON
    .then(data => {
        console.log(data[0].flag)
        document.querySelector('h2').innerText = data[0].name.common
        document.querySelector('h2').innerText += ` ${data[0].flag}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}