var myHammerJS = document.getElementById('hammerJS');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myHammerJS);

// listen to events
mc.on('swipeleft', function () {
    moveToNextSlide()
});

// listen to events
mc.on('swiperight', function () {
    moveToPrevSlide()
});

// Select Body
const bodyElement = document.body;

// Select Wrapper
const wrapper = document.querySelector('.wrapper');

// Select Slides Area
const slidesArea = document.querySelector('.slides-area');

// Set Up Slides-Count
const slidesCount = slidesArea.childElementCount;

// Set Up Slides-Count-Minus-One
const slidesCountMinusOne = slidesCount - 1;

// Select Next-Button
const prevButton = document.querySelector('.button-prev');

// Select Next-Button
const nextButton = document.querySelector('.button-next');

// Select Recite-Button
const reciteButton = document.querySelector('.button-recite');

// Select Paginations Area
const paginationsArea = document.querySelector('.paginations-area');

// Set Up Slide-Position
let slidePosition = 0;

// Set Up Move-Value
let moveValue = 0;

// Set Up Unit 
let unit = 'px';

// Functions Definition
let updateWrapperWidth;
let createPaginationItems;

// When (nextButton) Has (click) Event
prevButton.addEventListener('click', (event) => {
    // Call Function
    moveToPrevSlide();
});

// When (nextButton) Has (click) Event
nextButton.addEventListener('click', (event) => {
    // Call Function
    moveToNextSlide();
});

// When (reciteButton) Has (click) Event
reciteButton.addEventListener('click', (event) => {
    getStartedActions();
});

// When Window Has (resize) Event
window.addEventListener('resize', (event) => {
    updateWrapperWidth(wrapper.offsetWidth);
});

if (slidePosition == 0) {
    prevButton.classList.add('button-prev--hidden');
    reciteButton.classList.add('button-prev--hidden');
}

// Start Animate Function
function moveToPrevSlide() {
    // If Slide-Position Is Equal To Slides-area Children Count Minus One
    if (slidePosition == 0) {
        prevButton.classList.add('button-prev--hidden');
    } else {
        // Increase Slide Position
        slidePosition--;

        // Add On Move-value The Wrapper Width Value 
        moveValue -= wrapper.offsetWidth;
        if (slidePosition == 0) {
            prevButton.classList.add('button-prev--hidden');
        }

    }

    // Move The Slides-Area To Left
    slidesArea.style.marginLeft = `-${moveValue}${unit}`;

    // Call Functions
    updatePrevButton();
    createPaginationItems();
};

// Start Animate Function
function moveToNextSlide() {
    if (slidePosition !== slidesCountMinusOne) { // Else
        // Increase Slide Position
        prevButton.classList.remove('button-prev--hidden');
        slidePosition++;

        // Add On Move-value The Wrapper Width Value 
        moveValue += wrapper.offsetWidth;
    }
    if (slidePosition == 3) {
        nextButton.classList.add('button-prev--hidden');
        reciteButton.classList.remove('button-prev--hidden');
    }

    // Move The Slides-Area To Left
    slidesArea.style.marginLeft = `-${moveValue}${unit}`;

    // Call Functions
    updateNextButton();
    createPaginationItems();
};

// Update Wrapper Width Function
(updateWrapperWidth = function (width) {
    // Add Alternate Value For The (width) Param
    width = width || wrapper.offsetWidth;

    // Update The Slides-Area Width
    slidesArea.style.width = `${width * slidesCount}${unit}`;

    // If Slide Position Value Bigger Than 0
    if (slidePosition > 0) {
        // Update Move-value
        moveValue = width;

        // Move The Slides-Area To Left
        slidesArea.style.marginLeft = `-${width}${unit}`;

        // If Slide-Position Is Equal To Slides-area Children Count Minus One
        if (slidePosition === slidesCountMinusOne) {
            // Move The Slides-Area To Left
            slidesArea.style.marginLeft = `-${width * slidesCountMinusOne}${unit}`;
        }
    }
})();

// Update Next Button Function
function updatePrevButton() {

    if (slidePosition == 2) {
        nextButton.classList.remove('button-prev--hidden');
    }

    // Add Class (button-next--fade) 
    prevButton.classList.add('button-next--fade');

    // After 500 milliseconds
    setTimeout(() => {
        // Remove Class (button-next--fade)
        prevButton.classList.remove('button-next--fade');
    }, 500);
    reciteButton.classList.add('button-prev--hidden');
};

// Update Next Button Function
function updateNextButton() {
    // Add Class (button-next--fade) 
    nextButton.classList.add('button-next--fade');

    // After 500 milliseconds
    setTimeout(() => {
        // Remove Class (button-next--fade)
        nextButton.classList.remove('button-next--fade');
    }, 500);

};

// Create Pagination Items Function
(createPaginationItems = function () {
    // Empty The Paginations-Area Content
    paginationsArea.innerHTML = '';

    // Loop On All Slides-Area Children Count
    for (let i = 0; i < slidesCount; i++) {
        // Create Pagination Item
        const paginationItem = '<span class="paginations-area__item"></span>';

        // Add Inner The Pagination-Area The Pagination-Item
        paginationsArea.innerHTML += paginationItem;
    };

    // Add Class "paginations-area__item--current" In The Active Item
    paginationsArea.children[slidePosition].classList.add('paginations-area__item--current');
})();

// Get Started Actions Function
function getStartedActions() {
    // Chnage Background-color
    window.location.replace("https://play.google.com/store/apps/details?id=com.ngajionline.himam");
};