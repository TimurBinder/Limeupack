const slider = document.getElementById("additional-services__wrapper");
const sliderCard = document.getElementsByClassName("additional-services__card");
let firstTouch = null;
let touchDistance = 0;
let touchDistancePoint = 0;

slider.addEventListener("touchstart", sliderTouchStart);
slider.addEventListener("touchmove", sliderMove);

function sliderTouchStart(event) {
    firstTouch = event;
    touchDistancePoint = touchDistance;
}

function sliderMove(event) {
    event.preventDefault();
    for (let i = 0; i < event.changedTouches.length; i ++) {
        touchDistance = touchDistancePoint + event.changedTouches[i].clientX - firstTouch.changedTouches[0].clientX;
        if (touchDistance > 0)
            touchDistance = 0;
        else if (touchDistance < -sliderCard[0].offsetWidth * 4)
            touchDistance = -sliderCard[0].offsetWidth * 4;
    }

    for (let i = 0; i < sliderCard.length; i++) {
        sliderCard[i].style.transform = "translate(" + touchDistance + "px)";
    }
}