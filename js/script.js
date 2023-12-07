/*scrolling back to top of the page */

const plusIcon = document.querySelector('.menu-icon');

plusIcon.addEventListener('click', function () {
	document.documentElement.scrollTop = 0;
});

/*Scrolling to brands section */
const buttonOurBrands = document.querySelector('.category_our-brands');
const sectionOurBrands = document.querySelector('.skincare-brands');

buttonOurBrands.addEventListener('click', function () {
	sectionOurBrands.scrollIntoView({ behavior: 'smooth'});
});


/* for slideshow - recommendations */
const slideshow = document.querySelector('.slideshow_recs');
const slides = slideshow.querySelectorAll('.slideshow_slide');
const controls = slideshow.querySelectorAll('.slideshow_control-button');

let index = 0;
const totalSlides = slides.length;
const lastIndex = slides.length - 1;

const slidesDots = document.querySelectorAll('.slideshow_dot');

const goToPreviousSlide = () => {
    if (index === 0) {
        index = lastIndex;
    } else {
        index = index - 1;
    }
    updateSlide();
};

const goToNextSlide = () => {
    if (index < lastIndex) {
        index = index + 1;
    } else {
        index = 0;
    }
    updateSlide();
};

const goToSlide = (slideIndex) => {
    index = slideIndex;
    updateSlide();
};

const updateSlide = () => {
    slides.forEach((slide, i) => {
        slide.classList.remove('slideshow_slide--visible');
        if (i === index) {
            slide.classList.add('slideshow_slide--visible');
        }
    });

    updateDots();
	updateSlideNumber();
};

const updateDots = () => {
    slidesDots.forEach((dot, i) => {
        dot.classList.remove('slideshow_dot--active');
        if (i === index) {
            dot.classList.add('slideshow_dot--active');
        }
    });
};

// Event listener for previous/next buttons
const changeSlide = (event) => {
    const button = event.currentTarget;

    if (button.dataset.direction === 'previous') {
        goToPreviousSlide();
    }

    if (button.dataset.direction === 'next') {
        goToNextSlide();
    }
};

// Event listener for dots
const changeSlideByDot = (event) => {
    const dot = event.currentTarget;
    const dotIndex = Array.from(slidesDots).indexOf(dot);
    
    goToSlide(dotIndex);
};

slidesDots.forEach(dot => {
    dot.addEventListener('click', changeSlideByDot);
});


// Event listener for keyboard arrow keys
const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
        goToPreviousSlide();
    } else if (event.key === 'ArrowRight') {
        goToNextSlide();
    }
};

controls.forEach(button => {
    button.addEventListener('click', changeSlide);
});

// Add event listener for keyboard arrow keys
document.addEventListener('keydown', handleKeyDown);


