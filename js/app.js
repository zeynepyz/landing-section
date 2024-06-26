const navbar = document.getElementById('navbar');

// creating new array so it will be easy for creating li elements and adding them their classes or ids
const navSections = [
  { name: 'Section 1', id: 'section1', secId: 'sec1'},
  { name: 'Section 2', id: 'section2', secId: 'sec2'},
  { name: 'Section 3', id: 'section3', secId: 'sec3'},
  { name: 'Section 4', id: 'section4', secId: 'sec4'}
];

// for every navSection item it will create a new li element
navSections.forEach(navSection => {
  const li = document.createElement('li');
  // then add navbar-content class to that element
  li.classList.add('navbar-content');
  li.textContent = navSection.name;
  // li element's id
  li.id = navSection.id;
  // lastly this function append this li element in the ul element that we named navbar
  navbar.appendChild(li);

  // in this block we crate event listener for each li element because we want to go through the sections by clicking section's number in the navbar
  li.addEventListener('click', () => {
    const section = document.getElementById(navSection.secId);
    const sectionTop = section.offsetTop;

    // if we click the section number it will scroll smoothly to the right section
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth' // Smooth scrolling
    });
  });
});

function makeActive(id) {
  id.classList.add("active");
}
// this function is here for sticky navbar
window.onscroll = function() {myFunction()};
var sticky = navbar.offsetTop;

// as long as the screen is scrolled on the y-axis navbar will have sticky class
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const sections = document.querySelectorAll('.section')
const navbars = document.querySelectorAll('.navbar-content');

// this function will add active class for navbar elements
// it will change the element's color so it will be highlighted
function makeActive(){
  for (const section of sections) {
      const box = section.getBoundingClientRect();
      if (box.top <= 2450 && box.bottom >= 2450) {
        document.getElementById("section1").classList.add("active");
        document.getElementById("section2").classList.remove("active");
        document.getElementById("section3").classList.remove("active");
        document.getElementById("section4").classList.remove("active");
      } else if (box.top <= 2000 && box.bottom >= 1650) {
        document.getElementById("section1").classList.remove("active");
        document.getElementById("section4").classList.remove("active");
        document.getElementById("section3").classList.remove("active");
        document.getElementById("section2").classList.add("active");
      } else if (box.top <= 850 && box.bottom >= 900) {
        document.getElementById("section2").classList.remove("active");
        document.getElementById("section1").classList.remove("active");
        document.getElementById("section4").classList.remove("active");
        document.getElementById("section3").classList.add("active");
      } else if (box.top <= 80 && box.bottom >= 100) {
        document.getElementById("section2").classList.remove("active");
        document.getElementById("section1").classList.remove("active");
        document.getElementById("section3").classList.remove("active");
        document.getElementById("section4").classList.add("active");
      } else {
        // when we scroll to the top of the page, section 1 higlight still showed.
        // but i don't want it to be highlighted when it's top of the page because it's navbar's part.
          document.getElementById("section1").classList.remove("active");
      }
   }
}
document.addEventListener("scroll", makeActive);