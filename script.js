let blu = document.getElementById("blue")
let red = document.getElementById("red")
let gree = document.getElementById("green")
let boxTwo = document.getElementById("boxTwo")
let selfieTwo = document.getElementById("selfieTwo")
/*const btnScrollto = document.getElementByClassName("btn--scroll-to")
const section1 = document.getElementById('aboutMe') */

function shift() {
    red.style.transform = "translateY(-40px)";
    blu.style.transform = "translateX(-96px)";
    gree.style.transform = "translateX(96px)";
    gree.style.transition = "2s";
    gree.style.transition = "2s";
    blu.style.transition = "2s"
    red.style.transition = "2s"

}

function shiftBack() {
    blu.style.transform = "translateY(0px)";
    red.style.transform = "translateY(0px)";
    gree.style.transform = "translateY(0px)";

}

function shiftTwo () {
    boxTwo.style.transform = "translateX(-20px)";
    boxTwo.style.transition = "0.5s";
    boxTwo.style.backgroundColor = "var(--buttons)"
}

function shiftBackTwo() {
    boxTwo.style.transform = "translateX(0px)";
    boxTwo.style.backgroundColor = "transparent"
}

document.querySelector(".btn--scroll-to").addEventListener('click', function(e) {
    const s1coords = document.querySelector('#aboutMe').getBoundingClientRect();
    window.scrollTo({
        left: s1coords.left + window.pageXOffset,
        top: s1coords.top + window.pageYOffset,
        behavior: "smooth",
    })
})

/* Slider Function */

const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
  
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
      createDots();
  
      activateDot(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  
    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
slider();

/* Form */