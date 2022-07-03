let button = document.querySelector("#przycisk");
let button1 = document.querySelector("#przycisk1");

let showSlite = () => {
    document.querySelector(".slide").classList.add("active");
};

let hideActiveSlide = () => {
    document.querySelector(".slide").classList.remove("active");
};

button.addEventListener("click",showSlite);
button1.addEventListener("click",hideActiveSlide);