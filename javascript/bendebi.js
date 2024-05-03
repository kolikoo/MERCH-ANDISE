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

// ჯერვნახოთ// ჯერვნახოთ// ჯერვნახოთ// ჯერვნახოთ// ჯერვნახოთ// ჯერვნახოთ// ჯერვნახოთ

//  let slideIndex = 0;
//   const slides = document.getElementsByClassName("slideshow-image");
//   const dots = document.getElementsByClassName("dot");

//   function showSlide(n) {
//     if (n >= slides.length) {
//       slideIndex = 0;
//     } else if (n < 0) {
//       slideIndex = slides.length - 1;
//     }

//     for (let i = 0; i < slides.length; i++) {
//       slides[i].classList.remove("active");
//     }

//     for (let i = 0; i < dots.length; i++) {
//       dots[i].classList.remove("active");
//     }

//     slides[slideIndex].classList.add("active");
//     dots[slideIndex].classList.add("active");
//   }

//   function currentSlide(n) {
//     showSlide(slideIndex = n);
//   }

//   document.addEventListener("DOMContentLoaded", () => {
//     showSlide(slideIndex);
//   });

//   Array.from(dots).forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//       currentSlide(index);
//     });
//   });

const slideshowContainers = document.querySelectorAll('.slideshow-container');

  slideshowContainers.forEach(container => {
    let slideIndex = 0;
    const slides = container.querySelectorAll('.slideshow-image');
    const dots = container.querySelectorAll('.dot');

    function showSlide(n) {
      if (n >= slides.length) {
        slideIndex = 0;
      } else if (n < 0) {
        slideIndex = slides.length - 1;
      }

      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      slides[slideIndex].classList.add('active');
      dots[slideIndex].classList.add('active');
    }

    function currentSlide(n) {
      showSlide(slideIndex = n);
    }

    container.addEventListener('DOMContentLoaded', () => {
      showSlide(slideIndex);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide(index);
      });
    });

     showSlide(slideIndex); 
  });







// ჯერვნახოთ// ჯერვნახოთ// ჯერვნახოთ// ჯერვნახოთ// ჯერვნახოთ// ჯერვნახოთ// ჯერვნახოთ