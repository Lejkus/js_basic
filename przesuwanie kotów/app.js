let activeSlideNumber = 1;

let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

//to sie dzieje w forze
/*let dot1=document.querySelector("#dot1");
let dot2=document.querySelector("#dot2");
let dot3=document.querySelector("#dot3");

let slide1 = document.querySelector("#slide1");
let slide2 = document.querySelector("#slide2");
let slide3 = document.querySelector("#slide3");
*/

let hideActiveSlide = () => {
    let activeElement = document.querySelector(".active")
    activeElement.classList.remove("active");
};

let showSlite = (slideNumber) => {
    hideActiveSlide();
    document.querySelector("#slide"+slideNumber).classList.add("active");
};


let showNextSlide = () => {
    if (activeSlideNumber ===3 ){
        activeSlideNumber = 1;
    } else {
        activeSlideNumber = activeSlideNumber + 1;
    }
    showSlite(activeSlideNumber);
};

let showPrevSlide = () => {
    if (activeSlideNumber ===1 ){
        activeSlideNumber = 3;
    } else {
        activeSlideNumber = activeSlideNumber - 1;
    }
    showSlite(activeSlideNumber);
};

//to sie dzieje w forze
/*
let showSlite1 = () => {
    showSlite(1);
    activeSlideNumber = 1;
};
let showSlite2 = () => {
    showSlite(2);
    activeSlideNumber = 2;
};
let showSlite3 = () => {
    showSlite(3);
    activeSlideNumber = 3;
};
*/

//to sie dzieje w forze
//dot3.addEventListener("click",showSlite3);
//dot2.addEventListener("click",showSlite2);
//dot1.addEventListener("click",showSlite1);

for (let i=1; i<= 3; i++ ) {
    let showSliteI = () => {
        activeSlideNumber = i;
        showSlite(i);
    };
    document.querySelector("#dot"+i).addEventListener("click",showSliteI)
}

arrowRight.addEventListener("click",showNextSlide);
arrowLeft.addEventListener("click",showPrevSlide);