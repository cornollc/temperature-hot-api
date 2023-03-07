// wether api keay = '505a7b6a62a814e9634cf614cda6f37a';

const api_key = `505a7b6a62a814e9634cf614cda6f37a`;

const lodeTemperatuer = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => temperature(data))
};

const temperature = data => {
    console.log(data.weather[0].main);
    
    const tempracher = document.getElementById('temp-local');
    tempracher.innerText = data.main.temp;

    const clouds = document.getElementById('clouds');
    clouds.innerText = data.weather[0].main;
};





document.getElementById('btn-input').addEventListener('click', function () {

    const inputFild = document.getElementById('input-fild');
    const city = inputFild.value;
    document.getElementById('city').innerText = city;

    // const clodus = document.getElementById('')

    lodeTemperatuer(city);
    
});

