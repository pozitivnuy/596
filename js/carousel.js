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
    <img src="img/car_typeb.svg" class="d-block w-100" alt="Sweet scents soap">
    <h3>VAN</h3>
    <p class="notes">Initial Charge....</p>
    <p class="notes">If you have a sweet tooth, you will love our fruit, candy, and other sweet-scent soap.</p>
    <p class="notes">If you have a sweet tooth, you will love our fruit, candy, and other sweet-scent soap.</p>
    <p class="notes">If you have a sweet tooth, you will love our fruit, candy, and other sweet-scent soap.</p>
    <p class="notes">If you have a sweet tooth, you will love our fruit, candy, and other sweet-scent soap.</p>
    <a href="#logo" class="button" >Order Now &#x27F6;</a>`,

    `<img src="img/car_typec.svg" class="d-block w-100" alt="Herbal soap">
    <h3>Comfort</h3>
    <p class="notes">These soaps are for those who love the scent of lavander, juniper, and other herbs.</p>
    <p class="notes">These soaps are for those who love the scent of lavander, juniper, and other herbs.</p>
    <p class="notes">These soaps are for those who love the scent of lavander, juniper, and other herbs.</p>
    <p class="notes">These soaps are for those who love the scent of lavander, juniper, and other herbs.</p>
    <p class="notes">These soaps are for those who love the scent of lavander, juniper, and other herbs.</p>
    <a href="#header" class="button" >Order Now  &#x27F6;</a>`,

    `<img src="img/car_typef.svg" class="d-block w-100" alt="Problem skin soap">
    <h3>Sport</h3>
    <p class="notes">The soap will help get rid of blackheads, as well as normalize the oil glands.</p>
    <p class="notes">The soap will help get rid of blackheads, as well as normalize the oil glands.</p>
    <p class="notes">The soap will help get rid of blackheads, as well as normalize the oil glands.</p>
    <p class="notes">The soap will help get rid of blackheads, as well as normalize the oil glands.</p>
    <p class="notes">The soap will help get rid of blackheads, as well as normalize the oil glands.</p>
    <a href="#header" class="button" >Order Now  &#x27F6;</a>`,

    `<img src="img/car_typel.svg" class="d-block w-100" alt="Sensitive skin soap">
    <h3>Luxury</h3>
    <p class="notes">We have special soaps for especially delicate skin that requires gentle care.</p>
    <p class="notes">We have special soaps for especially delicate skin that requires gentle care.</p>
    <p class="notes">We have special soaps for especially delicate skin that requires gentle care.</p>
    <p class="notes">We have special soaps for especially delicate skin that requires gentle care.</p>
    <p class="notes">We have special soaps for especially delicate skin that requires gentle care.</p>
    <a href="#header" class="button" >Order Now  &#x27F6;</a>
    
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