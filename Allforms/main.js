const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
let currentImageIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

function slideToNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

showImage(currentImageIndex);
setInterval(slideToNextImage, 3000);
// Other side 

// JavaScript code for the slider
const sliderContainer = document.querySelector(".new-services-slider");
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

sliderContainer.addEventListener("mousedown", dragStart);
sliderContainer.addEventListener("touchstart", dragStart);
sliderContainer.addEventListener("mouseup", dragEnd);
sliderContainer.addEventListener("touchend", dragEnd);
sliderContainer.addEventListener("mouseleave", dragEnd);
sliderContainer.addEventListener("mousemove", drag);
sliderContainer.addEventListener("touchmove", drag);

function dragStart(e) {
  e.preventDefault();
  if (e.type === "touchstart") {
    startPosition = e.touches[0].clientX;
  } else {
    startPosition = e.clientX;
  }
  isDragging = true;
  animationID = requestAnimationFrame(animation);
}

function drag(e) {
  if (isDragging) {
    let currentPosition;
    if (e.type === "touchmove") {
      currentPosition = e.touches[0].clientX;
    } else {
      currentPosition = e.clientX;
    }
    currentTranslate = prevTranslate + currentPosition - startPosition;
  }
}

function dragEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);
  prevTranslate = currentTranslate;
}

function animation() {
  setSliderPosition();
  if (isDragging) {
    requestAnimationFrame(animation);
  }
}

function setSliderPosition() {
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
}
