const Pasek = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');

const sekcja = document.querySelector('.sekcja');

burgerIcon.addEventListener('click', function(){
    Pasek.classList.toggle('active');
    sekcja.classList.toggle('active');
    console.log(Pasek)
})

/*owoce*/
var zaznaczowoc = document.querySelector('.inputowoce');
var owoce = document.querySelectorAll('#okno.owoce');

zaznaczowoc.addEventListener('click', function(){
    for(let i = 0; i < owoce.length; i += 1) {
        owoce.item(i).classList.toggle('active');
    }
    console.log(owoce)
})

/*warzywa*/
var zaznaczwarzywo = document.querySelector('.inputwarzywa');
var warzywa = document.querySelectorAll('#okno.warzywa');

zaznaczwarzywo.addEventListener('click', function(){
    for(let i = 0; i < warzywa.length; i += 1) {
        warzywa.item(i).classList.toggle('active');
    }
    console.log(warzywa)
})

const przyciskkoszyk = document.querySelector('.koszyk')
const pasekzakupy = document.querySelector('.zakupy');

przyciskkoszyk.addEventListener('click', function(){
    pasekzakupy.classList.toggle('active');
    sekcja.classList.toggle('koszyk');
    console.log(pasekzakupy)
})

//Koszyk 

//dodawanie

var  addToCartButtons = document.getElementsByClassName('shop-item-button')
for (var i=0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}



function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('opis')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('ikona')[0].src
    console.log(title)
    console.log(price)
    console.log(imageSrc)

    addItemToCart(title,price,imageSrc)
}

function addItemToCart(title,price,imageSrc){
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('działaj')[0]
    var cartItemNames = cartItems.getElementsByClassName('opisprodukt')
    for (var i=0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item jest już w koszytku')
            //jak sie zrobi return to wychodzi i nie dodaje
            return
        }
    }

    var cartRowContents = `
    <div id="produkt" >
    <img class='ikonaprodukt'src="${imageSrc}"/>
    <div id="ladnie">
        <text class="opisprodukt">${title}</text>
        <text class="priceprodukt">${price}</text>
        <button class='usun' ><img src="images/usun.png"/>Usuń</button>
    </div>
    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('usun')[0].addEventListener('click',removeCartItem) 
    console.log(cartRowContents)
}

// usun wszystko


document.getElementsByClassName('buyprodukt')[0].addEventListener('click', purchaseClicked)

function purchaseClicked(){
    alert('Dziękujemy za zakupy')
    var cartItems = document.getElementsByClassName('działaj')[0]
    while (cartItems.hasChildNodes){
        cartItems.removeChild(cartItems.firstChild)
    }
}


// usun produkt

var removeCartItemButtons = document.getElementsByClassName('usun')
    for (var i=0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click' ,removeCartItem) 
    }


function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
}


