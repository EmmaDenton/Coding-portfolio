const icon = document.querySelector('.icon');
const navigator = document.querySelector('.navigator');
const container = document.querySelector('.container');
const dropbtn = document.querySelector('#dropbtn');
const dropdown = document.querySelector(".dropdown-content");
var p1 = document.getElementById('P1');
var p2 = document.getElementById('P2');
var p3 = document.getElementById('P3');

// Define the initial state of the navigator
let isOpen = false;
p1.classList.remove('dropdown-visible');
p2.classList.remove('dropdown-visible');
p3.classList.remove('dropdown-visible');

function toggleNavigator() {
  if (isOpen) {
    navigator.style.transform = 'translateX(100%)';
    icon.classList.remove("toggled");
    p1.classList.remove('dropdown-visible');
    p2.classList.remove('dropdown-visible');
    p3.classList.remove('dropdown-visible');
    isOpen = false;
  } else {
    navigator.style.transform = 'translateX(0)';
    icon.classList.add("toggled");
    isOpen = true;
  }
}

document.getElementById('dropbtn').addEventListener('click', function() {

  if (!p1.classList.contains('dropdown-visible')) {
    p1.classList.add('dropdown-visible');
    p2.classList.add('dropdown-visible');
    p3.classList.add('dropdown-visible');
  } else {
    p1.classList.remove('dropdown-visible');
    p2.classList.remove('dropdown-visible');
    p3.classList.remove('dropdown-visible');
  }
});

icon.onclick = () => {
  toggleNavigator()
}

const downarrow = document.getElementById('downarrow');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY || window.pageYOffset;
  const threshold = 100;
  if (scrollY >= threshold) {
    downarrow.style.opacity = '0';
  } else {
    downarrow.style.opacity = '1';
  }
});

container.addEventListener('click', function(event) {
  if (!navigator.contains(event.target) && !icon.contains(event.target)) {
    navigator.style.transform = 'translateX(100%)';
    icon.classList.remove("toggled");
    isOpen = false;
  }
});
