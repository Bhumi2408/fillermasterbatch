let index = 0;

    const slides = document.getElementById("slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    function showSlide() {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      index++;

      if(index >= totalSlides){
        index = 0;
      }

      showSlide();
    }

    function prevSlide() {
      index--;

      if(index < 0){
        index = totalSlides - 1;
      }

      showSlide();
    }

    // AUTO SLIDE

    setInterval(() => {
      nextSlide();
    }, 4000);


   const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const target = +counter.getAttribute("data-target");

  let count = 0;

  const speed = target / 80;

  const updateCounter = () => {

    count += speed;

    if(count < target){

      counter.innerHTML = Math.ceil(count) + "+";

      requestAnimationFrame(updateCounter);

    } else {

      // LAST VALUE

      if(target === 244){
        counter.innerHTML = target;
      } else {
        counter.innerHTML = target + "+";
      }
    }
  };

  updateCounter();

});

const awardsTrack = document.getElementById("awardsTrack");

const awardCards = document.querySelectorAll(".award-card");

let awardIndex = 0;

function updateAwardSlider(){

  let cardWidth = awardCards[0].offsetWidth + 26;

  awardsTrack.style.transform =
    `translateX(-${awardIndex * cardWidth}px)`;
}

/* NEXT */

function nextAwardSlide(){

  if(window.innerWidth <= 768){

    if(awardIndex >= awardCards.length - 1){
      awardIndex = 0;
    } else {
      awardIndex++;
    }

  } else if(window.innerWidth <= 1200){

    if(awardIndex >= awardCards.length - 2){
      awardIndex = 0;
    } else {
      awardIndex++;
    }

  } else {

    if(awardIndex >= awardCards.length - 3){
      awardIndex = 0;
    } else {
      awardIndex++;
    }
  }

  updateAwardSlider();
}

/* PREV */

function prevAwardSlide(){

  if(awardIndex <= 0){

    if(window.innerWidth <= 768){
      awardIndex = awardCards.length - 1;

    } else if(window.innerWidth <= 1200){
      awardIndex = awardCards.length - 2;

    } else {
      awardIndex = awardCards.length - 3;
    }

  } else {
    awardIndex--;
  }

  updateAwardSlider();
}

/* AUTO SLIDE */

setInterval(() => {
  nextAwardSlide();
}, 4000);

/* RESIZE FIX */

window.addEventListener("resize", updateAwardSlider);