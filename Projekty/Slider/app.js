const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide,index){
    //index to chyba pozycja w jakiej jest slajd
    console.log(slide,index);
    slide.style.left = `${index*100}%`
});

let counter = 0;
nextBtn.addEventListener('click',function(){
    counter++
    przesuwanie()
});

prevBtn.addEventListener('click',function(){
    counter--
    przesuwanie()
});

function przesuwanie() {

    if (counter === slides.length){
        counter=0;
    }
    if (counter < 0){
        counter = slides.length - 1;
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}