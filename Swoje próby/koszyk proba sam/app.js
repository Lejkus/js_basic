const koszyk = document.querySelector('.koszyk');
const produkty = document.querySelectorAll('.produkt');


produkty.forEach(function(produkt){
    const btn = produkt.querySelector('.dodaj');
    //console.log(produkt)
    btn.addEventListener('click',wyczuj)
});


function wyczuj(wcisniety){
    var button = wcisniety.target
    var przedmiot = button.parentElement
    var tekst = przedmiot.querySelector('.opis').innerText
    var title = przedmiot.querySelector('.tytul').innerText
    //console.log(tekst);
    //dodaj(title,tekst)
    dodaj(title,tekst)
};


function dodaj(title,tekst){
    var nowyprodukt = document.createElement('div')
    nowyprodukt.classList.add('produktkoszyk')

    var to_co_dodaje = `
    <h1 class="tytulkoszyk">${title}</h1>
    <p class="opiskoszyk">${tekst}</p>
    `


    nowyprodukt.innerHTML = to_co_dodaje
    koszyk.append(nowyprodukt)
}

/*
function dodaj(title,tekst){
    var nowyprodukt = document.createElement('div')
    nowyprodukt.classList.add('produkt')

    var to_co_dodaje = `<div class="produktkoszyk">
    <h1 class="tytulkoszyk">${title}</h1>
    <p class="opiskoszyk">${tekst}</p>
    </div>`


    nowyprodukt.innerHTML = to_co_dodaje
    koszyk.append(nowyprodukt)
}*/