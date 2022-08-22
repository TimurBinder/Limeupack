const firstScreen = document.getElementById("first-screen");
const firstScreenSlider = document.getElementsByClassName("first-screen__slide");
let firstScreenSlideIndex = 1;
var sliderAutoChange = setInterval(function() {
    firstScreenIndexChange(1);
    firstScreen.style.backgroundImage = "url('./img/Main/FirstScreen/first-screen-" + firstScreenSlideIndex + ".png')";
}, 5000)

for (let i = 0; i < firstScreenSlider.length; i++) {
    firstScreenSlider[i].onclick = function() {
        firstScreenIndexChange(i);
        firstScreen.style.backgroundImage = "url('./img/Main/FirstScreen/first-screen-" + firstScreenSlideIndex + ".png')";
        clearInterval(sliderAutoChange);
        sliderAutoChange;
    }   
}

function firstScreenIndexChange(ind) {
    if (ind == 0) 
        firstScreenSlideIndex--;
    else if (ind == 1) 
        firstScreenSlideIndex++;
    
    if (firstScreenSlideIndex < 1) 
        firstScreenSlideIndex = 4;
    else if (firstScreenSlideIndex > 4)
        firstScreenSlideIndex = 1;
}

const reviewsCards = document.getElementsByClassName("reviews-card");
const reviewsCardSlider = document.getElementsByClassName("reviews__slide");
let reviewsSlideIndex = 0;

for (let i = 0; i < reviewsCardSlider.length; i++) {
    reviewsCardSlider[i].onclick = function() {
        reviewsIndexChange(i);
        for (let j = 0; j < reviewsCards.length; j++)
            reviewsCards[j].style.display = "none";
        reviewsCards[reviewsSlideIndex].style.display = "block";
    }   
}

function reviewsIndexChange(ind) {
    if (ind == 0) 
        reviewsSlideIndex--;
    else if (ind == 1) 
        reviewsSlideIndex++;
    
    if (reviewsSlideIndex < 0) 
        reviewsSlideIndex = 0;
    else if (reviewsSlideIndex > 2)
        reviewsSlideIndex = 2;
}

const productsSlider = document.getElementById("products-banner__slider");
const productsSliderSection = document.getElementsByClassName("products-banner__slider-section");
const productsSliderSectionLinkArrow = document.getElementsByClassName("products-banner__slider-section__offer-link-arrow");
const productsSliderArrowLeft = document.getElementById("products-banner__slider-arrow-left");
const productsSliderArrowRight = document.getElementById("products-banner__slider-arrow-right");
const productsSliderCircle = document.getElementsByClassName("products__slider-circle");
let translateDistanceIndex = 0;
let translateDistance = -productsSliderSection[0].offsetWidth;

for (let i = 0; i < productsSliderSection.length; i++) {
    productsSliderSection[i].onmouseover = function() {
        productsSliderSectionLinkArrow[i].src = "./img/Main/Products/linkArrowHover.svg";
    }
    productsSliderSection[i].onmouseout = function() {
        productsSliderSectionLinkArrow[i].src = "./img/Main/Products/linkArrow.svg";
    }
}

productsSliderArrowLeft.onclick = function() {
    productsSlideChange(translateDistance, 1);
    productsSliderCircleChange(translateDistanceIndex);
}
productsSliderArrowRight.onclick = function() {
    productsSlideChange(translateDistance, -1);
    productsSliderCircleChange(translateDistanceIndex);
}

function productsSlideChange(translate, ind) {
    translateDistanceIndex += ind;

    if (translateDistanceIndex < 0)
        translateDistanceIndex = 0;
    else if (translateDistanceIndex > productsSliderSection.length - 3)
        translateDistanceIndex = productsSliderSection.length - 3;

    for (let i = 0; i < productsSliderSection.length; i++) {
        productsSliderSection[i].style.transform = "translateX(" + ((translate * translateDistanceIndex)) + "px)";
    }
}

function productsSliderCircleChange() {
    for (let i = 0; i < productsSliderCircle.length; i++) {
        productsSliderCircle[i].classList.remove("products__slider-circle__activate");
    }
    productsSliderCircle[translateDistanceIndex].classList.add("products__slider-circle__activate");
}

let productsFirstTouch = null;
let touchDistance = 0;
let touchDistancePoint = 0;

productsSlider.addEventListener("touchstart", productsSliderTouchStart);
productsSlider.addEventListener("touchmove", productsSliderMove);

function productsSliderTouchStart(event) {
    productsFirstTouch = event;
    touchDistancePoint = touchDistance;
}

function productsSliderMove(event) {
    event.preventDefault();
    for (let i = 0; i < event.changedTouches.length; i ++) {
        touchDistance = touchDistancePoint + event.changedTouches[i].clientX - productsFirstTouch.changedTouches[0].clientX;
        if (touchDistance > 0)
            touchDistance = 0;
        else if (touchDistance < -productsSliderSection[0].offsetWidth * 6)
            touchDistance = -productsSliderSection[0].offsetWidth * 6;
    }

    for (let i = 0; i < productsSliderSection.length; i++) {
        productsSliderSection[i].style.transform = "translate(" + touchDistance + "px)";
    }

    productsSliderTouchCircleIndexChange()
}

function productsSliderTouchCircleIndexChange() {
    for (let i = 0; i < 7; i++) {
        if (touchDistance <= -productsSliderSection[0].offsetWidth * i 
        && touchDistance >= -productsSliderSection[0].offsetWidth * (i + 1)) {
            translateDistanceIndex = i;
        }
        productsSliderCircleChange();
    }
}



