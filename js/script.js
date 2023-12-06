/* for slideshow - recommendations */
const slideshow = document.querySelector('.slideshow_recs');
const slides = slideshow.querySelectorAll('.slideshow_slide');
const controls = slideshow.querySelectorAll('.slideshow_control-button');

let index = 0;
const totalSlides = slides.length;
const lastIndex = slides.length - 1;

const slidesDots = document.querySelectorAll('.slideshow__dot');


console.log(totalSlides);

const goToPreviousSlide = () => {
	if (index === 0) {
		index = lastIndex;
	} else {
		index = index - 1;
	}

	console.log(index);

	// update classes
	slides.forEach(slide => {
		slide.classList.remove('slideshow_slide--visible');
	});

	slides[index].classList.add('slideshow_slide--visible');
};

const goToNextSlide = () => {
	// increase index
	if (index < lastIndex) {
		index = index + 1;
	} else {
		index = 0;
	}

	console.log(index);

	// update classes
	slides.forEach(slide => {
		slide.classList.remove('slideshow_slide--visible');
	});

	slides[index].classList.add('slideshow_slide--visible');
};


const changeSlide = (event) => {
	const button = event.currentTarget;

	if (button.dataset.direction === 'previous') {
		goToPreviousSlide();
	}

	if (button.dataset.direction === 'next') {
		goToNextSlide();
	}
}

controls.forEach(button => {
	button.addEventListener('click', changeSlide);
})

/*Scrolling to brands section */
const buttonOurBrands = document.querySelector('.category_our-brands');
const sectionOurBrands = document.querySelector('.skincare-brands');

buttonOurBrands.addEventListener('click', function () {
	sectionOurBrands.scrollIntoView({ behavior: 'smooth'});
});

/*scrolling back to top of the page */

const plusIcon = document.querySelector('.menu-icon')

plusIcon.addEventListener('click', function () {
	document.documentElement.scrollTop = 0;
});