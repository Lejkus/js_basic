const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext('2d');
const wszystko = canvas.getContext('2d');
const kwadratczerwony = canvas.getContext('2d');
const kwadratniebieski = canvas.getContext('2d');
const kwadratbialy = canvas.getContext('2d');
const silawyswietl = document.querySelector('#sila');

let x = 100;
let y = 100;
let radius = 30;
let speed = 3;

let downPressed = false;
let upPressed = false;
let rightPressed = false;
let leftPressed = false;

let kolorek = 'pink';
let dead = false;

let sila=0

let e = false;


function wywolajgre(){
    clearScreen();
    przesuwanie();
    wyjechanieCheck();
    drawGreenBlob();
    drawKwadrat();
    smierc();
}

function aktualizuj_sile(){
    sila=sila+10000
    silawyswietl.textContent = `Siła : ${sila}`
}

function smierc(){
    if (dead){
        alert('przegrałeś!')
        x = 100;
        y = 100;
        dead = false;
        downPressed = false;
        upPressed = false;
        rightPressed = false;
        leftPressed = false;
        kolorek = 'pink';
    }
}

function drawGreenBlob(){
    ctx.fillStyle = kolorek
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI *2)
    ctx.fill();
}

function drawKwadrat(){
    kwadratczerwony.fillStyle = 'red'
    kwadratczerwony.strokeStyle = 'red'
    kwadratczerwony.lineWidth = 4;
    kwadratczerwony.strokeRect(canvas.clientWidth-200,canvas.height-300,150, 110);

    kwadratniebieski.fillStyle = 'blue'
    kwadratniebieski.strokeStyle = 'blue'
    kwadratniebieski.lineWidth = 4;
    kwadratniebieski.strokeRect(canvas.clientWidth-200,canvas.height-500,150, 110);

    kwadratbialy.fillStyle = 'white'
    kwadratbialy.strokeStyle = 'white'
    kwadratbialy.lineWidth = 4;
    kwadratbialy.font = "20px Arial";
    kwadratbialy.fillText("Sklep cena 20 siły", canvas.clientWidth-200, canvas.height-720);
    kwadratbialy.strokeRect(canvas.clientWidth-200,canvas.height-700,150, 110);
}

function clearScreen(){
    wszystko.fillStyle = 'maroon';
    wszystko.fillRect(0,0,canvas.clientWidth,canvas.height)
}

function wyjechanieCheck(){
    //up
    if (y < radius){
        y = radius;
    }
    //down
    if(y> canvas.height-radius){
        y = canvas.height-radius
    }
    //left
    if (x < radius){
        x = radius;
    }
    if(x> canvas.width-radius){
        x = canvas.width-radius
    }
    //kwadraty
    if (x > canvas.clientWidth-200 && y > canvas.height-300 && x < canvas.clientWidth-50 && y < canvas.height-150){
        speed = 3;
        kolorek = 'red';
    }

    if (x > canvas.clientWidth-200 && y > canvas.height-500 && x < canvas.clientWidth-50 && y < canvas.height-350){
        speed = 3;
        kolorek = 'blue';
    }
    if (x > canvas.clientWidth-200 && y > canvas.height-700 && x < canvas.clientWidth-50 && y < canvas.height-570){
        //dead = true;
        kolorek = 'white';
    }
}

function przesuwanie(){
    if (downPressed){
        y=y+speed
    }
    if (upPressed){
        y=y-speed
    }
    if (leftPressed){
        x=x-speed
    }
    if (rightPressed){
        x=x+speed
    }
}

function pobieranieOplat(){
    if (sila >= 20){
        sila=sila-20
        //alert("Kupiono"); 
        e = false;
    }
    else{
        alert('brak kasy');
        e = false;
    }
}

document.body.addEventListener('keydown',nacisniety);
document.body.addEventListener('keyup',puszczony);

function nacisniety(event){
    if (event.keyCode == 40){
        downPressed = true;
    }
    if (event.keyCode == 38){
        upPressed = true;
    }
    if (event.keyCode == 37){
        leftPressed = true;
    }
    if (event.keyCode == 39){
        rightPressed = true;
    }
    if (event.keyCode == 69){
        e = true;
        if (e){
            pobieranieOplat();
        }
    }
}

function puszczony(event){
    if (event.keyCode == 40){
        downPressed = false;
    }
    if (event.keyCode == 38){
        upPressed = false;
    }
    if (event.keyCode == 37){
        leftPressed = false;
    }
    if (event.keyCode == 39){
        rightPressed = false;
    }
    if (event.keyCode == 69){
        e = false;
    }
}


wywolajgre();
setInterval(wywolajgre,1000/144);
setInterval(aktualizuj_sile,1000)

