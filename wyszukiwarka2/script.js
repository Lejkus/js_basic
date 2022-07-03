const input = document.querySelector('input')
const liItem = document.querySelectorAll('li')

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

input.addEventListener('keyup',filterList)