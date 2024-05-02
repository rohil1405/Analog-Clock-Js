const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

function rotate() {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let secound = date.getSeconds();

    let hourRotation = (30 * hour) + (0.5 * minute);
    let minuteRotation = 6 * minute;
    let secondRotation = 6 * secound;

    hr.style.transform = `translate(-50%,-100%) rotate(${hourRotation}deg)`;
    min.style.transform = `translate(-50%,-100%) rotate(${minuteRotation}deg)`;
    sec.style.transform = `translate(-45%, -85%) rotate(${secondRotation}deg)`;
}
setInterval(rotate, 500);