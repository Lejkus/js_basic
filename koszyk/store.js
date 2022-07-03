//koniec

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


// w tych tu ogólnei chodzi o to że do jakiegoś elementu z html dodajemy odpowiednik z js i do niego przypisujemy funkcje 
function ready () {

    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for (var i=0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        //lisener czeka jak cos zrobimy i cos wywołuje
        button.addEventListener('click' ,removeCartItem) 
    }
    
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i=0; i < removeCartItemButtons.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change',quantityChanged)
    }

    var  addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i=0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    //ten na dole 1 przycisk
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}


function removeCartItem(event) {
    //to jest funkcja co sie wykonuje, !event.target! -Zwraca referencję do elementu, do którego zdarzenie zostało pierwotnie wysłane.
    var buttonClicked = event.target
    //parentElement to chyba te elemety co chcemy usunąć
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <=0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    //ustawiamy zeby nam znajdowało cene tytuł i zdj
    // innerText pobiera i ustawia zawartość znacznika jako zwykły tekst
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price,imageSrc)

    addItemToCart(title,price,imageSrc)
    updateCartTotal()
}

//funnkcja do codaje diva do html
function addItemToCart(title,price,imageSrc) {
    //tu jakby tworzy diva
    var cartRow = document.createElement('div')
    //tutaj dodajemy klase aby sie ładnie wyświetlało
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    //to i for jest po to żeby sie dodawała ilośc a nie 10 takich samych elementów
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i=0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item jest już w koszytku')
            //jak sie zrobi return to wychodzi i nie dodaje
            return
        }
    }


    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    //tutaj to żeby sie usuwały dodane elementy
    cartRow.getElementsByClassName('btn btn-danger')[0].addEventListener('click',removeCartItem) 
    //po zmienieniu ilosci zmieni sie cena
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('click',quantityChanged)
}

function purchaseClicked(){
    alert('dzieki za zakupy')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    //dopuki w koszyk ma dzieci coś
    while (cartItems.hasChildNodes){
        cartItems.removeChild(cartItems.firstChild)
        updateCartTotal() 
    }
}

function updateCartTotal() {
    //to że bierzemy z dokumentu element przez klase i to 0 że totalnie 1
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    //var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    //kopiujemy z gory
    for (var i=0; i < cartRows.length; i++) {
        //ustawiamy to na kazdy item w srodku tego
        //var cartRow = cartRows[i]
        //to samo co do gory
        var priceElemnt = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        //zabiera tekst z elementu calego //replace zamienia dolara na nic
        //float zamienia na float
        var price = parseFloat(priceElemnt.innerText.replace('$', ''))
        var quantity= quantityElement.value
        total = total + (price * quantity)
        console.log(price* quantity)
        console.log(total)
    }
    //zeby nie bylo po przecinku
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
