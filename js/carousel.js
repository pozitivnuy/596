// const images = [
//     "img/car_typec.svg",
//     "img/car_typeb.svg",
//     "img/car_typef.svg",
//     "img/car_typel.svg",
// ]

// let currentSlide = 0;

// function showSlide() {
//     const carouselImage = document.querySelector('.products-carousel img');
//     carouselImage.src = images[currentSlide];
// }

// function nextSlide() {
//     currentSlide++;
//     if (currentSlide >= images.length) currentSlide = 0;
//     showSlide();
// }

// function prevSlide() {
//     currentSlide--;
//     if (currentSlide < 0) currentSlide = images.length - 1;
//     showSlide();
// }
// showSlide();
// setInterval(nextSlide, 3000);

// document.querySelector('.carousel-prev').addEventListener('click', prevSlide);
// document.querySelector('.carousel-next').addEventListener('click', nextSlide);

 (function() {
  const categories = [`
    <img src="img/car_typeb.svg" class="d-block w-100" alt="VAN Car">
    <h3>VAN</h3>
    <p class="notes"><b>Initial Charge....</b>$5.50</p>
    <p class="notes"><b>Minimum Distance....</b>500m</p>
    <p class="notes"><b>Standing time....</b>$1/minute</p>
    <p class="notes"><b>Passengers....</b>8 max</p>
    <p class="notes"><b>Booking in Advance....</b>$10</p>
    <a id="welcomee" href="#logo" class="button" >Order Now </a>`,

    `<img src="img/car_typec.svg" class="d-block w-100" alt="Comfort Car">
    <h3>Comfort</h3>
    <p class="notes"><b>Initial Charge....</b>$5.50</p>
    <p class="notes"><b>Minimum Distance....</b>500m</p>
    <p class="notes"><b>Standing time....</b>$1/minute</p>
    <p class="notes"><b>Passengers....</b>4 max</p>
    <p class="notes"><b>Booking in Advance....</b>$10</p>
    <a id="welcomee" href="#header" class="button" >Order Now  </a>`,

    `<img src="img/car_typef.svg" class="d-block w-100" alt="Sport Car">
    <h3>Sport</h3>
    <p class="notes"><b>Initial Charge....</b>$8.50</p>
    <p class="notes"><b>Minimum Distance....</b>500m</p>
    <p class="notes"><b>Standing time....</b>$2/minute</p>
    <p class="notes"><b>Passengers....</b>3 max</p>
    <p class="notes"><b>Booking in Advance....</b>$20</p>
    <a id="welcomee" href="#header" class="button" >Order Now  </a>`,

    `<img src="img/car_typel.svg" class="d-block w-100" alt="Luxury Car">
    <h3>Luxury</h3>
    <p class="notes"><b>Initial Charge....</b>$10</p>
    <p class="notes"><b>Minimum Distance....</b>500m</p>
    <p class="notes"><b>Standing time....</b>$3/minute</p>
    <p class="notes"><b>Passengers....</b>3 max</p>
    <p class="notes"><b>Booking in Advance....</b>$20</p>
    <a id="welcomee" href="#header" class="button" >Order Now  </a>
    
 ` ];
let currentIdx = 0;

  function showCurrentSlide() {
      const slide1Container = document.querySelector('.categories-carousel .product-one');
      slide1Container.innerHTML = categories[currentIdx];

      const slide2Container = document.querySelector('.categories-carousel .product-two');
      const product2Idx = currentIdx + 1 >= categories.length ? 0 : currentIdx + 1;
      slide2Container.innerHTML = categories[product2Idx];

      const slide3Container = document.querySelector('.categories-carousel .product-three');
      const product3Idx = product2Idx + 1 >= categories.length ? 0 : product2Idx + 1;
      slide3Container.innerHTML = categories[product3Idx];

  }

  function prevSlide() {
      currentIdx--;
      if (currentIdx <= 0) currentIdx = categories.length - 1;
      showCurrentSlide();
  }
 function nextSlide() {
      currentIdx++;
      if (currentIdx >= categories.length) currentIdx = 0;
      showCurrentSlide();
  }
  document.querySelector('.categories-carousel .slide-prev').addEventListener('click', prevSlide);
  document.querySelector('.categories-carousel .slide-next').addEventListener('click', nextSlide);

  showCurrentSlide();
})();