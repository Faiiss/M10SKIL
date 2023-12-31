let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 2 seconds (adjust as needed)
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides();
});
