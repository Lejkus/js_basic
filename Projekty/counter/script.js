//ilosc
let count = 0;

//select value and buttons
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

//console.log(btns)
//cudo

btns.forEach(function(item){
    //console.log(item);
    item.addEventListener("click", function(przycisk){
        //console.log(przycisk.currentTarget);
        //console.log(przycisk.currentTarget.classList);
        const styles = przycisk.currentTarget.classList
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else if(styles.contains("reset")){
            count = 0;
        }
        
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
            value.textContent = count;
    })
});