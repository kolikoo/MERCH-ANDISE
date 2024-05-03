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
