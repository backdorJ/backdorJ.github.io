let btn = document.getElementById('btn-tag-name-1')

btn.addEventListener('click', () => {
    let dogName = document.getElementById('balbec-name');
    let value = document.getElementById('dog-name').value;
    
    let description = document.getElementById('balbec-descr-inp').value;
    let balbecPlace = document.getElementById('balbec-description');
    

    if (value) {
        dogName.innerText = value;
    }
    
    if (description) {
        balbecPlace.innerText = description;
    }

});

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
 
function goToSlide(index) {
  if (index < 0) {
    index = carouselItems.length - 1;
  } else if (index > carouselItems.length) {
    index = 0;
    goToPrevSlide(currentIndex - 1)
  }
  currentIndex = index;
  document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 30}%)`;
}
 
function goToNextSlide() {
  goToSlide(currentIndex + 1);
}
 
function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}
 
setInterval(goToNextSlide, 3000);