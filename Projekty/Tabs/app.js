const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    //consoluje target na jaki kliknąłem w sekcji about i oddaje tylko jedo "data-id="goals"" a jak nie ma to nic nie oddaje przez co oddaje tylko id przycisków
    console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if(id){
        //usun ze wszystkich
        btns.forEach(function(btn){
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        //hide other articles
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        const element = document.getElementById(id);
        element.classList.add('active')
    }   
});