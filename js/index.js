function changeClock() {
const clock = document.querySelector('.clock');
clock.innerText = new Date().toLocaleTimeString();
}

setInterval(changeClock , 1000 );
