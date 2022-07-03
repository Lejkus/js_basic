/*bedziemy mieli wybrane wszystkie elementy z klasami liczba*/
const liczby = document.querySelectorAll(".liczba")
const operatory = document.querySelectorAll(".operator")

const wyczysc = document.querySelector(".wyczysc")
const usun = document.querySelector('.usun')
const rownosc = document.querySelector('.rownosc')
const wynikPoprzednie = document.querySelector('.poprzednie-dzialanie')
const wynikAktualne = document.querySelector('.aktualne-dzialanie')

/*zmienna ktora bedzie przechowywala wartosc dzialania*/
let aktualneDzialanie = ''
let poprzednieDzialanie = ''
/*aktualnie wybrana operacja*/
let operacja = undefined


const zaktualizujWynik = () => {
    wynikAktualne.innerText = aktualneDzialanie
    wynikPoprzednie.innerText = poprzednieDzialanie
}

const dodajliczbe = (liczba) => {
    if (liczba === "•") {
        /*includes sprawdza czy zawiera*/
        if (aktualneDzialanie.includes(".")){
            return
        }
        liczba ="."
    }
    aktualneDzialanie= aktualneDzialanie.toString() + liczba.toString()
}

liczby.forEach((liczba) => {
    /*bedzie nasłuchiwał kliknięcia i bedzie robil funkcje dodaj liczbe*/
    liczba.addEventListener('click', () => {
        dodajliczbe(liczba.innerText)
        zaktualizujWynik()
    })
})
