let slides = document.querySelectorAll('.hd');

// Function to activate the first slide
function activateSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
} 
