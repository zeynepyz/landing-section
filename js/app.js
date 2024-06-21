//in this section i try to highlight navbar contents with js it needs to improve i will try on this

/*

const navbar = document.querySelector('.navbar');
function highlight(event) {
    const target = event.target;
        if (target.textContent.endsWith('1')) {
            navbars[0].setAttribute('style', 'background-color: gray');
        } else if (target.textContent.endsWith('2')) {
            navbars[1].setAttribute('style', 'background-color: gray');
        }
        else if (target.textContent.endsWith('3')) {
            navbars[2].setAttribute('style', 'background-color: gray');
        }
        else if (target.textContent.endsWith('4')) {
            navbars[3].setAttribute('style', 'background-color: gray');
        }
}


function nonHighlight() {
    navbars[0].setAttribute('style', 'background-color: white');
    navbars[1].setAttribute('style', 'background-color: white');
    navbars[2].setAttribute('style', 'background-color: white');
    navbars[3].setAttribute('style', 'background-color: white');
}

navbar.addEventListener('mouseover', highlight);
navbar.addEventListener('mouseleave', nonHighlight);
*/

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const sections = document.querySelectorAll('.section')
const navbars = document.querySelectorAll('.navbar-content');

function makeActive(){
  for (const section of sections) {
      const box = section.getBoundingClientRect();
      //Find a value that works best, but 150 seems to be a good start.
      if (box.top <= 2450 && box.bottom >= 2500) {
      //apply active state on current section and corresponding Nav link
        document.getElementById("section1").classList.add("active");
      } else {
        document.getElementById("section1").classList.remove("active");
      }
      if (box.top <= 1700 && box.bottom >= 1650) {
        document.getElementById("section2").classList.add("active");
      } else {
          document.getElementById("section2").classList.remove("active");
        }
      if (box.top <= 850 && box.bottom >= 900) {
          document.getElementById("section3").classList.add("active");
      } else {
            document.getElementById("section3").classList.remove("active");
          }
      if (box.top <= 90 && box.bottom >= 100) {
            document.getElementById("section4").classList.add("active");
      } else {
              document.getElementById("section4").classList.remove("active");
            }

   }
}


document.addEventListener("scroll", function() { makeActive();});