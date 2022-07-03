//************************** ZMIENNE GLOBALNE ********************************/

const mojOLX = document.querySelector('.ikonadivczlowiek');
const wysunczlowiek = document.querySelector('.wysunczlowiek');
const dodajogloszenie_btn = document.querySelector('.dodajogloszenie-btn');
const dodajogloszenie = document.querySelector('.dodajogloszenie');

const ogloszeniasekcja = document.querySelector('.ogloszenia');
const kategoriewszystkie = document.querySelector('.kategoriewszystkie');

zatwierdz = document.querySelector('.submit-btn'); 

const wysuwanekategorie = document.querySelector('.category');

const input = document.querySelector('.inputglowny');

const ogloszenia = [
    {
        id: 1,
        title: "Lancome La Vie Est Belle",
        category: "Nieruchomości",
        price: 72,
        img: "images/dom.jpg",
        lokalizacja: "Bydgoszcz - dzisiaj 08:57",
    },
    {
        id: 2,
        title: "Sea Doo RXP-X RS Skuter Wodny",
        category: "Motoryzacja",
        price: "63 900",
        img: "images/motorowka.jpg",
        lokalizacja: "Rzeszów - 16 mar",
    },
    {
        id: 3,
        title: "Narożnik FRESH z f. spania",
        category: "Dom i ogród",
        price: "2 300",
        img: "images/kanapa.jpg",
        lokalizacja: "Gniewkowo dzisiaj 10:35",
    },
    {
        id: 7,
        title: "Iphone 13 Pro szart",
        category: "Elektronika",
        price: "4 200",
        img: "https://cdn.arstechnica.net/wp-content/uploads/2021/09/iPhone-13-Pro-Max-back.jpeg",
        lokalizacja: "Kraków - 28 sty",
    },
    {
        id: 4,
        title: "Mieszkane na wynajem Leszno",
        category: "Nieruchomości",
        price: "1 200",
        img: "https://simplicite.pl/wp-content/uploads/2017/09/jak-urzadzic-mieszkanie-na-wynajem-13.jpg",
        lokalizacja: "Leszno - 23 mar",
    },
    {
        id: 5,
        title: "Quad KXD 125",
        category: "Motoryzacja",
        price: "42 700",
        img: "https://image.ceneostatic.pl/data/products/100575173/i-quad-kxd-125-110-cc-varia-bombardier-bialobrzegi.jpg",
        lokalizacja: "Warszawa - 29 luty",
    },
    {
        id: 6,
        title: "Leżak ogrodowy czarny",
        category: "Dom i ogród",
        price: "899",
        img: "https://stardomiogrod.pl/themes/default-bootstrap/img//star-meble/mobile-slider.jpg",
        lokalizacja: "Bydgoszcz dzisiaj 17:14",
    },
    {
        id: 7,
        title: "Iphone 13 Pro niebieski",
        category: "Elektronika",
        price: "3 699",
        img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35.jpg",
        lokalizacja: "Łódź - 10 sty",
    },
    {
        id: 9,
        title: "Bluza ellesse szara",
        category: "Moda",
        price: "230",
        img: "https://img01.ztat.net/article/spp-media-p1/a8305144a73231a7ad6e4fd89588e7cc/c4264a8a547b49059f62539759a4ce43.jpg?imwidth=762&filter=packshot",
        lokalizacja: "Warszawa - 30 sty",
    },
    {
        id: 10 ,
        title: "Zestaw fanatec CSL DD",
        category: "Elektronika",
        price: "5 699",
        img: "https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/51cd1276524995b96960092e410c7c09.jpg",
        lokalizacja: "Leszno - wczoraj 05:46",
    },
];

const kategorie = [
    {
        podpiskategoria: "Wszystko",
        ikonakategori: "http://ppnt.poznan.pl/wp-content/uploads/2017/09/outsourcing-us%C5%82ug-IT.png",
    },
    {
        podpiskategoria: "Motoryzacja",
        ikonakategori: "images/ikonka auta.jpg",
    },
    {
        podpiskategoria: "Nieruchomości",
        ikonakategori: "images/ikona dom.jpg",
    },
    {
        podpiskategoria: "Praca",
        ikonakategori: "https://media.istockphoto.com/photos/file-folder-and-stack-of-business-report-paper-file-on-the-table-in-a-picture-id1180197816",
    },
    {
        podpiskategoria: "Dom i ogród",
        ikonakategori: "https://thumbs.dreamstime.com/b/czerwony-aksamitny-krzes%C5%82o-na-czarnym-tle-34021728.jpg",
    },
    {
        podpiskategoria: "Elektronika",
        ikonakategori: "https://cdn.benchmark.pl/uploads/article/70227/MODERNICON/63436b08d366b2c054558986c77c1a793786d03c.jpg",
    },
    {
        podpiskategoria: "Moda",
        ikonakategori: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_500,h_377/https://sklep-kora.pl/wp-content/uploads/2020/06/Szlafrok-hotelowy-wafel-gofrowany_3-500x377.jpg",
    },
    {
        podpiskategoria: "Zwierzęta",
        ikonakategori: "https://d-art.ppstatic.pl/kadry/k/r/1/bf/9e/5c42e1d5985fc_o_medium.jpg",
    },

];

const brak =[
    {
        komunikat: "Brak dostępnych produktów",
    }
];

//***************************** NASŁUCHIWANIA *********************************/

window.addEventListener('DOMContentLoaded',function(){
    displayOgloszenia(ogloszenia);
    displayKategorie(kategorie);
    displayWysuwaneKategorie(kategorie);
    setupItems();
    filtrujKategorie(kategorie);
    nasluchujebrak();
});

dodajogloszenie_btn.addEventListener('click',function(){
    dodajogloszenie.classList.toggle('active');
});

mojOLX.addEventListener('click',function(){
    wysunczlowiek.classList.toggle('active');
});

zatwierdz.addEventListener('click',function(){
    const tytul = document.querySelector('.title').value;
    const kategoria = document.querySelector('.category').value;
    const cena = document.querySelector('.price').value;
    const lokaliza = document.querySelector('.lokalizacja').value;
    const zdjecie = document.querySelector('.zdjecie').value;
    const id = ogloszenia.length+1;
    //console.log(tytul,kategoria,cena,lokaliza);
        if (tytul.length > 0 && kategoria.length > 0 && cena.length > 0) {
            ogloszenia.push({
                id: id,
                title: tytul,
                category: kategoria,
                price: cena,
                img: zdjecie, 
                lokalizacja: lokaliza,
            },)
            addToLocalStorage(id,tytul,kategoria,cena,lokaliza,zdjecie);
            document.querySelector('.title').value = ""
            document.querySelector('.category').value = null
            document.querySelector('.price').value = ""
            document.querySelector('.lokalizacja').value = ""
            document.querySelector('.zdjecie').value = ""
            dodajogloszenie.classList.remove('active');
        }
        else{
            alert('Brakuje wartości')
        }

        console.log(ogloszenia);
        displayOgloszenia(ogloszenia);
});

input.addEventListener('keyup',filterList)

//******************************** FUNKCJE ***********************************/

function displayOgloszenia(ogloszenia){
    let displayMenu = ogloszenia.map(function(ogloszenie){
          
      return  `<div class="ogloszenieokno">
      <div class="zdjecie-ogloszenie-div">
          <img src=${ogloszenie.img} class="zdjecie-ogloszenie">
      </div>
      <div class="napisy">
          <a class="tytulogl-oszenie">${ogloszenie.title}</a>
          <a class="lokalizacja-data">${ogloszenie.lokalizacja}</a>
          <div class="cena-ikonka">
              <a class="cena-ogloszenie">${ogloszenie.price}</a>
              <img class="serce" src="https://img.icons8.com/material-outlined/33/000000/filled-like.png"/>
          </div>
      </div>
  </div>`;
  
  });
  //console.log(displayMenu);
  displayMenu = displayMenu.join('');
  ogloszeniasekcja.innerHTML = displayMenu; 
};

function displayKategorie(kategorie){
    let displaykategorie = kategorie.map(function(kategoria){
            //console.log(kategoria);
            return `<div class="kategoriadiv" data-id="${kategoria.podpiskategoria}">
            <img class="ikonakategori" src="${kategoria.ikonakategori}">
            <a class="podpiskategoria">${kategoria.podpiskategoria}</a>
        </div>`;
    });

    //console.log(displaykategorie);
    displaykategorie = displaykategorie.join('');

    //console.log(displaykategorie);
    //console.log(kategoriewszystkie.innerHTML);

    kategoriewszystkie.innerHTML = displaykategorie;
};

function filtrujKategorie(){
    const kategorie = document.querySelectorAll('.kategoriadiv');

    kategorie.forEach(function(kategoria){
        //console.log(kategoria);
        kategoria.addEventListener('click',function(e){
            wybranakategoria = e.currentTarget.dataset.id;  
            //console.log(wybranakategoria);

            const menuCategory = ogloszenia.filter(function(menuItem){
                if(menuItem.category === wybranakategoria){
                    //console.log(menuItem);
                    return menuItem;
                  }
                });
                if (wybranakategoria === 'Wszystko'){
                    displayOgloszenia(ogloszenia);
                    nasluchujebrak();
                }
                else{
                    displayOgloszenia(menuCategory);
                    nasluchujebrak();
                }
        });
    });
}

function displayWysuwaneKategorie(kategorie){
    let display_wysuwanekategorie = kategorie.map(function(kategoria){
            return `<option value="${kategoria.podpiskategoria}">${kategoria.podpiskategoria}</option>`;
 
    });
    display_wysuwanekategorie = display_wysuwanekategorie.join('');
    wysuwanekategorie.innerHTML = display_wysuwanekategorie;
};

function nasluchujebrak(){
    var element =  document.getElementsByClassName('ogloszenieokno');
    //console.log(element.length);
    if (element.length === 0)
    {
        brakfunkcja(brak)
    }
};

function brakfunkcja(brak){
    let displayMenu = brak.map(function(komunikat){
        
        return  `<h4 class="brak">${komunikat.komunikat }</h4>`;
    });
    displayMenu = displayMenu.join('');
    ogloszeniasekcja.innerHTML = displayMenu; 
}

// filtrowanie ogłoszeń poprzez wpisywanie 
function filterList(){
    const ogloszenia = document.querySelectorAll('.ogloszenieokno');
    const tytul = document.querySelectorAll('.tytulogl-oszenie');

    tytul.forEach(item =>{
        const match = new RegExp(input.value, 'i').test(item.textContent)
        if(!match) {
            item.parentElement.parentElement.style.display = 'none'
        }else {
            item.parentElement.parentElement.style.display = 'block'
        }
    
    })
}




//***************** LOKALNY STORAGE **************/

function addToLocalStorage(id,tytul,kategoria,cena,lokalizacja,zdjecie){
    const itemek = {id,tytul,kategoria,cena,lokalizacja,zdjecie}

    let items = localStorage.getItem("lista")?JSON.parse(localStorage.getItem('lista')):[];

    items.push(itemek);

    localStorage.setItem('lista',JSON.stringify(items))
};

function setupItems(){
    let items = localStorage.getItem("lista")?JSON.parse(localStorage.getItem('lista')):[];

    items.forEach(function(item){
        ogloszenia.push({
            id: item.id,
            title: item.tytul,
            category: item.kategoria,
            price: item.cena,
            img: item.zdjecie, 
            lokalizacja: item.lokalizacja,
        },);
    });
    //console.log(ogloszenia);
    displayOgloszenia(ogloszenia)
};
