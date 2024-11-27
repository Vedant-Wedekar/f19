let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}


prevButton.onclick = function(){
    showSlider('rev');
}


let unAcceppClick;


const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}

///////////////////////////////////////////////////////////////////////////////
  
let nextButton_1 = document.getElementById('next-1');
let prevButton_1 = document.getElementById('prev-1');
let carousel_1 = document.querySelector('.carousel-1');
let listHTML_1 = document.querySelector('.carousel-1 .list-1');
let seeMoreButtons_1 = document.querySelectorAll('.seeMore-1');
let backButton_1 = document.getElementById('back-1');

nextButton_1.onclick = function(){
    showSlider_1('next-1');
}


prevButton_1.onclick = function(){
    showSlider_1('prev-1');
}


let unAcceppClick_1;


const showSlider_1 = (type) => {
    nextButton_1.style.pointerEvents = 'none';
    prevButton_1.style.pointerEvents = 'none';

    carousel_1.classList.remove('next-1', 'prev-1');
    let items_1 = document.querySelectorAll('.carousel_1 .list_1 .item_1');
    if(type === 'next-1'){
        listHTML_1.appendChild(items_1[0]);
        carousel_1.classList.add('next-1');
    }else{
        listHTML_1.prepend(items_1[items_1.length - 1]);
        carousel_1.classList.add('prev-1');
    }
    clearTimeout(unAcceppClick_1);
    unAcceppClick_1 = setTimeout(()=>{
        nextButton_1.style.pointerEvents = 'auto';
        prevButton_1.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons_1.forEach((button) => {
    button.onclick = function(){
        carousel_1.classList.remove('next-1', 'prev-1');
        carousel_1.classList.add('showDetail-1');
    }
});
backButton_1.onclick = function(){
    carousel_1.classList.remove('showDetail-1');
}




























