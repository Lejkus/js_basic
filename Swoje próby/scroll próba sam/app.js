const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navbar = document.getElementById('nav');

const about = document.getElementById('about');



window.addEventListener('scroll',function(){
    
    const scrollHeight = this.window.pageYOffset;
    //console.log(scrollHeight);
    const navHeight = navbar.getBoundingClientRect().height;
    //pobiramy gdzie jest about
    const aboutHeight = about.getBoundingClientRect().height;
    const container = document.querySelector('.container1');

    const tytul = document.querySelector('.tytul');
    const tekst = document.querySelector('.tekst');

    if (scrollHeight+300 > aboutHeight){
        about.style.backgroundColor = 'black'
        
        tytul.classList.add('wyjedz');
        setTimeout(() => {  tekst.classList.add('wyjedz');; }, 1500);

        
    }
    else{
        about.style.backgroundColor = ''
    }

    if (scrollHeight > navHeight){ 
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav');
    };
});

