let totalSlides = document.querySelectorAll('.slider--item').length;
let correntSlide = 0;


document.querySelector('.slider--width').style.width =
    `calc(100% * ${totalSlides})`;
document.querySelector('.slider--controls').style.height =
    `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    correntSlide--;
    if (correntSlide < 0) {
        correntSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext() {
    correntSlide++;
    if (correntSlide > (totalSlides - 1)) {
        correntSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider').clientWidth;
    let newMargin = (correntSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
        `-${newMargin}px`;
}

setInterval(goNext, 2000);