//slajdy
let activeSlideNumber = 1;

let hideActiveSlide = () => {
    let activeElement = document.querySelector(".active")
    activeElement.classList.remove("active");
};

let showSlite = (slideNumber) => {
    hideActiveSlide();
    document.querySelector("#slide"+slideNumber).classList.add("active")
    document.querySelector("#slide"+slideNumber).style.transition = "all 2s";
};


let showNextSlide = () => {
    if (activeSlideNumber ===3 ){
        activeSlideNumber = 1;
    } else {
        activeSlideNumber = activeSlideNumber + 1;
    }
    showSlite(activeSlideNumber);
};


setInterval("showNextSlide()", 4*1000);