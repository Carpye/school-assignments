let scrollValue = 0;
let header = document.querySelector("header");


document.addEventListener("scroll", function(){
    scrollValue = window.scrollY;


    console.log(scrollValue);

    if (scrollValue*0.1 <= 80) {
        header.style.height = (100 - (scrollValue * 0.1)) + "%";
    }

});