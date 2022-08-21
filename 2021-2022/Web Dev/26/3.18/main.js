let openBtn = document.querySelector(".open-menu");
let closeBtn = document.querySelector(".close-menu");
let nav = document.querySelector(".sidenav");

openBtn.addEventListener("click", function(){
    nav.classList.toggle("open");
});

closeBtn.addEventListener("click", function(){
    nav.classList.toggle("open");
});

particlesJS.load('particles-js', 'assets/particles.json', () => 
    console.log('Wszystko ok'));

