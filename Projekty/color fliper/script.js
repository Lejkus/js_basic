const colors = ["green","red","rgba(133,122,200)","#f15025"]; 
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


//zajebiste bo po kliknięciu konsoluje całe body
btn.addEventListener("click",function(){
    //console.log(document.body);
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    //losowy kolor robi tła
    document.body.style.backgroundColor = colors[randomNumber];
    //zmienia napis pokazywania koloru
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}