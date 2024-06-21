//in this section i try to highlight navbar contents with js it needs to improve i will try on this

const navbar = document.getElementById("navbar");

const ul = document.createElement('ul');
ul.classList.add("navbar");


const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');


const a1 = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');
const a4 = document.createElement('a');


li1.classList.add("navbar-content");
li2.classList.add("navbar-content");
li3.classList.add("navbar-content");
li4.classList.add("navbar-content");

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

li1.setAttribute('id', 'section1');
li2.setAttribute('id', 'section2');
li3.setAttribute('id', 'section3');
li4.setAttribute('id', 'section4');

a1.href = '#sec1';
a2.href = '#sec2';
a3.href = '#sec3';
a4.href = '#sec4';


a1.classList.add("link");
a2.classList.add("link");
a3.classList.add("link");
a4.classList.add("link");

a1.textContent = "Section 1";
a2.textContent = "Section 2";
a3.textContent = "Section 3";
a4.textContent = "Section 4";

li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);

navbar.appendChild(ul);

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