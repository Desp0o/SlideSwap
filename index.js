let slidePosition = 0;
const slides = document.getElementsByClassName('slide');
const totalSlides = slides.length;
const nextButton = document.getElementById('next_button')
const prevButton = document.getElementById('prev_button')

nextButton.addEventListener("click", function() {
    moveToNextSlide();
  });


  prevButton.addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('vissible');
    
  }

  slides[slidePosition].classList.add('vissible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = totalSlides-1;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = 0;
      } else {
        slidePosition--;
      }

  updateSlidePosition();
}