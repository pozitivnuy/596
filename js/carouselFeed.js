(function() {
    const categories = [`
      <img src="img/feadback1.webp" class="d-block w-100" alt="Girl">
      <h3>Alice Mendels</h3>
      <p class="notes"><i>“When I am in New York, I always use this taxi. I like polite drivers and clean cars. I have never encountered any problems with this taxi service. Moreover, there are discounts, so getting around New York by taxi is profitable.”</i></p>
      `,
  
      `<img src="img/feadback3.webp" class="d-block w-100" alt="Man">
      <h3>Dean Peterson</h3>
      <p class="notes"><i>“I have been using only this taxi service for several years now. Whenever I book a ride, the car arrives within 10-15 minutes. I also sometimes use this taxi to get to the airport. This service offers really competitive rates.”</i></p>
      `,
  
      `<img src="img/feadback2.webp" class="d-block w-100" alt="Girl2">
      <h3>Jessica Wenner</h3>
      <p class="notes"><i>“New York is a city where it is often more profitable and faster to get somewhere by taxi than by car. I often call a taxi to get home from work, go to meetings, and I always use this service. I am completely satisfied."</i></p>
      `,
  
      `<img src="img/feadback4.webp" class="d-block w-100" alt="Gay">
      <h3>Sam Ferrels</h3>
      <p class="notes"><i>“When I go to the airport, I always call this taxi service. I like polite drivers, clean cars, and punctuality. Whenever I call a taxi, the car arrives in a few minutes. Punctuality is really important to me, as I used to often be late for the flights because of taxis.”</i></p>
      
      
   ` ];
  let currentIdx = 0;
  
    function showCurrentSlide() {
        const slide1Container = document.querySelector('.categories-carousel-feed .product-one');
        slide1Container.innerHTML = categories[currentIdx];
  
        const slide2Container = document.querySelector('.categories-carousel-feed .product-two');
        const product2Idx = currentIdx + 1 >= categories.length ? 0 : currentIdx + 1;
        slide2Container.innerHTML = categories[product2Idx];
  
        const slide3Container = document.querySelector('.categories-carousel-feed .product-three');
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
    document.querySelector('.categories-carousel-feed .slide-prev').addEventListener('click', prevSlide);
    document.querySelector('.categories-carousel-feed .slide-next').addEventListener('click', nextSlide);
  
    showCurrentSlide();
  })();