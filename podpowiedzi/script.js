const aaa = document.querySelector('#myUL');
const burgerIcon = document.querySelector('#MyInput');
const input = document.querySelector('input')
const liItem = document.querySelectorAll('li')


burgerIcon.addEventListener('click', function(){
    aaa.classList.toggle('active');
    console.log('hej')
})

const filterList = () => {
    liItem.forEach(item =>{
        const match = new RegExp(input.value, 'i').test(item.textContent)
        if(!match) {
            item.style.display = 'none'
        }else {
            item.style.display = 'block'
        }
    
    })
}