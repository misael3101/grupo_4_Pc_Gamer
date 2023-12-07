/*const slider = document.querySelector('#slider1');
let sliderSection = document.querySelectorAll('.slider__seccion');
let sliderSectionLast = [sliderSection.length - 1];

const btnLeft = document.querySelector('#btn-left');
const btnright = document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast)*/

const slider = document.querySelector('#slider1');
let sliderSection = document.querySelectorAll('.slider__seccion');
let sliderSectionLast = sliderSection.length - 1;  // Corrige esta línea, quita los corchetes

const btnLeft = document.querySelector('#btn-left');
const btnright = document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin', sliderSection[sliderSectionLast]);  // Corrige esta línea

function next() {
    let sliderSectionFirst = document.querySelectorAll('.slider__seccion')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500)
};

function prev() {
    let sliderSection = document.querySelectorAll('.slider__seccion');
    let sliderSectionLast = sliderSection.length - 1;
    slider.style.marginLeft = '0%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSection[sliderSectionLast]);
        slider.style.marginLeft = '-100%';
    }, 500)
};


btnright.addEventListener('click', function(){
    next()
});

btnLeft.addEventListener('click', function(){
    prev()
});

setInterval(function(){
    next()
}, 5000)