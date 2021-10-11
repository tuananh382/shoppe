
const slides = document.querySelector('.slider-img');
const images = document.querySelectorAll('.slider-img img');

const prev = document.querySelector('.btn.prevBtn');
const next = document.querySelector('.btn.nextBtn');

let i = 1;
const size = 780;
slides.style.transform = "translateX(" + (-size * i) + "px)" ;

next.addEventListener('click', () => { 
    
    if (i >= images.length - 1) return;
    
    slides.style.transition = "transform 0.4s ease-in-out";
    i++; 
    slides.style.transform = "translateX(" + (-size * i) + "px)" ;
    console.log(size)    
    console.log(i)
});

prev.addEventListener('click', () => { 
    console.log("cc")
    if (i <= 0) return; 
    slides.style.transition = "transform 0.4s ease-in-out";
    i--; 
    slides.style.transform = "translateX(" + (-size * i) + "px)" ;
    
});

slides.addEventListener('transitionend', () => {
    if (images[i].id ==='lastClone'){
        slides.style.transition = "none" ;
        i = images.length - 2;
        slides.style.transform = "translateX(" + (-size * i) + "px)" ;
    }
    if (images[i].id ==='firstClone'){
        slides.style.transition = "none" ;
        i = images.length - i;
        slides.style.transform = "translateX(" + (-size * i) + "px)" ;
    }
})