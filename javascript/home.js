// newjss
// header // header // header // header // header // header // header // header // header 
// newjs  ///////////////////////////////////
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    document.querySelector(".header_home_nav").style.display = "flex";
    document.querySelector(".icons_1").style.display = "block";
    document.querySelector(".icons_2").style.display = "block";
    document.querySelector(".header_home_li").style.display = "block";
    document.querySelectorAll(".header_home_li").forEach(function (element) {
      element.style.display = "flex";
    });
    document.querySelector(".logo_nav").style.transform = "scale(1)";

  } else {
    document.querySelector(".header_home_li").style.display = "none";
    document.querySelector(".icons_1").style.display = "none";
    document.querySelector(".icons_2").style.display = "none"
    document.querySelectorAll(".header_home_li").forEach(function (element) {
      element.style.display = "none";
    });
    document.querySelector(".logo_nav").style.transform = "scale(0.7";

  }
  prevScrollPos = currentScrollPos;
});
//logo is always visible
document.querySelector(".logo_nav").style.display = "block";



// newjs  ///////////////////////////////////

// header // header // header // header // header // header // header // header 
let slideIndex = 1;
showSlides(slideIndex);

let slideInterval = setInterval(nextSlide, 4000); // Auto transition every 4 seconds

function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex = n);
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

// Restart auto transition after manual navigation
document.querySelector('.prev').addEventListener('click', () => {
  plusSlides(-1);
  slideInterval = setInterval(nextSlide, 4000);
});

document.querySelector('.next').addEventListener('click', () => {
  plusSlides(1);
  slideInterval = setInterval(nextSlide, 4000);
});

document.querySelectorAll('.dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide(index + 1);
    slideInterval = setInterval(nextSlide, 4000);
  });
});
