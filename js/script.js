const deg = 6;
const hr = document.getElementById('hr');
const min = document.getElementById('mn');
const sec = document.getElementById('sc');

setInterval(() => {
    let day = new Date();
    let hour = day.getHours() * 30;
    let minutes = day.getMinutes() * deg;
    let seconds = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hour)+(minutes/12)}deg)`;
    min.style.transform = `rotateZ(${(minutes)}deg)`;
    sec.style.transform = `rotateZ(${(seconds)}deg)`;
})