document.getElementById('search').addEventListener('click', getMap)

function getMap() {
    const country = document.querySelector('input').value

    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json()) //parse as JSON
    .then(data => {
        console.log(data[0])
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}