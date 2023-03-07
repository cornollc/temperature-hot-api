// fetch data;
const url = (`https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam`);
fetch(url)
.then(res => res.json())
.then(data => console.log(data));