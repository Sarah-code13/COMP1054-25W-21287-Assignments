document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector('.slider-track');
    const cards = document.querySelectorAll('.slider-track .card');
    const cardWidth = cards[0].offsetWidth + 30;
    let index = 0;
  
    function slideRight() {
        index++;
        if (index >= cards.length) {
            index = 0;
        }
        updateSlider();
    }
  
    function slideLeft() {
        index--;
        if (index < 0) {
            index = cards.length - 1;
        }
        updateSlider();
    }
  
    function updateSlider() {
        const moveX = -index * cardWidth;
        track.style.transform = `translateX(${moveX}px)`;
    }
  
    
    window.slideLeft = slideLeft;
    window.slideRight = slideRight;
  });
$(document).ready(function(){
    $(window).on("scroll", function(){
      if($(this).scrollTop() > 100){
        $("header").addClass("scrolledHeader");
      } else {
        $("header").removeClass("scrolledHeader");
      }
    });
  });
  let startX = 0;
  let isDragging = false;
  
  track.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
    isDragging = true;
  });
  
  track.addEventListener("touchmove", function (e) {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;
    track.style.transition = "none";
    track.style.transform = `translateX(${ -index * cardWidth + diffX }px)`;
  });
  const Hamb = document.getElementById('Hamb');
  const navWrapper = document.getElementById('navWrapper');

  Hamb.addEventListener('click', () => {
    navWrapper.classList.toggle('active');
  });
  track.addEventListener("touchend", function (e) {
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;
    if (diffX > 50) {
      slideLeft();
    } else if (diffX < -50) {
      slideRight();
    } else {
      updateSlider(); 
    }
  
    track.style.transition = "transform 0.5s ease";
  });
  window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.parallax');
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = `${offset * .5}px`;
  });