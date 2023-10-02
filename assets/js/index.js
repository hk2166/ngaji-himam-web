// Static Variable Definition
const bodyElement = document.body;
const wrapper = document.querySelector('.wrapper');
const slidesArea = document.querySelector('.slides-area');
const paginationsArea = document.querySelector('.paginations-area');
const reciteButton = document.querySelector('.button-recite');
const myHammerJS = document.getElementById('hammerJS');
const hammer = new Hammer(myHammerJS);
const slidesCount = slidesArea.childElementCount;
const slidesCountMinusOne = slidesCount - 1;

// Dynamic Variable Definition
let slidePosition = 0;
let moveValue = 0;
let unit = 'px';

// Move to Prev Slide Function
function moveToPrevSlide() {

    if (slidePosition != 0) {
        slidePosition--;
        moveValue -= wrapper.offsetWidth;
        slidesArea.style.marginLeft = `-${moveValue}${unit}`;
        createPaginationItems();
    }


};

// Move to Next Slide Function
function moveToNextSlide() {
    
    if (slidePosition != slidesCountMinusOne) {
        slidePosition++;
        moveValue += wrapper.offsetWidth;
        slidesArea.style.marginLeft = `-${moveValue}${unit}`;
        createPaginationItems();
    }


};

// Get Started Actions Function
function getStartedActions() {
    window.location.replace("https://play.google.com/store/apps/details?id=com.ngajionline.himam");
};

// Update Wrapper Width Dynamic Function
(updateWrapperWidth = function (width) {

    width = width || wrapper.offsetWidth;
    slidesArea.style.width = `${width * slidesCount}${unit}`;

    if (slidePosition > 0) {
        moveValue = width;
        slidesArea.style.marginLeft = `-${width}${unit}`;
        if (slidePosition == slidesCountMinusOne) {
            slidesArea.style.marginLeft = `-${width * slidesCountMinusOne}${unit}`;
        }
    }

})();

// Update Pagination Items Dynamic Function
(createPaginationItems = function () {

    paginationsArea.innerHTML = '';

    for (let i = 0; i < slidesCount; i++) {
        const paginationItem = '<span class="paginations-area__item"></span>';
        paginationsArea.innerHTML += paginationItem;
    };

    paginationsArea.children[slidePosition].classList.add('paginations-area__item--current');

})();

// Listen to Swipe Left
hammer.on('swipeleft', function () {
    moveToNextSlide()
});

// Listen to Swipe Right
hammer.on('swiperight', function () {
    moveToPrevSlide()
});

// When (reciteButton) Has (click) Event
reciteButton.addEventListener('click', (event) => {
    getStartedActions();
});

// Add onpresskey Listener for ArrowLeft and ArrowRight
document.addEventListener("keydown", (e) => {
	e = e || window.event;
	if (e.key == "ArrowRight") {
		moveToNextSlide();
	} else if (e.key == "ArrowLeft") {
        moveToPrevSlide();
	}
});