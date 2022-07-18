const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.progress__bar-counter')
const lines = document.querySelectorAll('.progress__bar-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

