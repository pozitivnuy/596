// function couldown() {
//   const clock = document.querySelector(".couldown");
//   clock.innerText = new Data("2020").toLocaleTime;
// }
// setInterval(couldown, 1000);
// couldown();

let deadline = new Date("Jan 5, 2022 15:37:25").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let t = deadline - now;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.querySelector("#couldown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (t < 0) {
    clearInterval(x);
    document.querySelector("#couldown").innerHTML = "EXPIRED End (Лавачка закрита )";
  }
}, 1000);
