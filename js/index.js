let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");
let dateElement = document.getElementById("date");

setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    hrs.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    ampm.innerHTML = period;

    let currentDate = currentTime.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    dateElement.innerHTML = currentDate;
}, 1000);
