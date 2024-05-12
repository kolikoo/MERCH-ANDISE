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

// slideshow// slideshow// slideshow// slideshow// slideshow// slideshow

var MainImg=document.getElementById("MainImg");

var smallimage = document.getElementsByClassName("small-image");

smallimage[0].onclick = function(){MainImg.src = smallimage[0].src;}

smallimage[1].onclick = function(){MainImg.src = smallimage[1].src;}

smallimage[2].onclick = function(){MainImg.src = smallimage[2].src;}

// slideshow// slideshow// slideshow// slideshow// slideshow// slideshow

// boxsactive// boxsactive// boxsactive// boxsactive// boxsactive

 function changeColor(element) {
    // Remove 'active' class from all elements
    var sizes = document.querySelectorAll('.size');
    sizes.forEach(function(size) {
      size.classList.remove('active');
    });
    
    // Add 'active' class to the clicked element
    element.classList.add('active');
  }



// boxsactive// boxsactive// boxsactive// boxsactive// boxsactive