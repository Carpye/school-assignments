let arrowLeft = document.querySelector(".icon-left-open");
let arrowRight = document.querySelector(".icon-right-open");

let dot1 = document.querySelector(".icon-dot")[0];
let dot2 = document.querySelector(".icon-dot")[1];
let dot3 = document.querySelector(".icon-dot")[2];

const img1 = document.querySelector(".img1");
console.log(img1);
const img2 = document.querySelector(".img2");
console.log(img2);
const img3 = document.querySelector(".img3");
console.log(img3);

arrowRight.addEventListener("click", function(){
    if(img1.classList.contains("left-img") === true){
        img1.classList.remove("left-img");
        img1.classList.add("center-img");
        img1.style.animation = "left-center 1s linear"
    }
    else if(img1.classList.contains("center-img") === true){
        img1.classList.remove("center-img");
        img1.classList.add("right-img");
        img1.style.animation = "none";
    }
    else if(img1.classList.contains("right-img") === true){
        img1.classList.remove("right-img");
        img1.classList.add("left-img");
        img1.style.animation = "none";
    }

    if(img2.classList.contains("left-img") === true){
        img2.classList.remove("left-img");
        img2.classList.add("center-img");
        img2.style.animation = "left-center 1s linear"
    }
    else if(img2.classList.contains("center-img") === true){
        img2.classList.remove("center-img");
        img2.classList.add("right-img");
        img2.style.animation = "none";
    }
    else if(img2.classList.contains("right-img") === true){
        img2.classList.remove("right-img");
        img2.classList.add("left-img");
        img2.style.animation = "none";
    }

    if(img3.classList.contains("left-img") === true){
        img3.classList.remove("left-img");
        img3.classList.add("center-img");
        img3.style.animation = "left-center 1s linear"
    }
    else if(img3.classList.contains("center-img") === true){
        img3.classList.remove("center-img");
        img3.classList.add("right-img");
        img3.style.animation = "none";
    }
    else if(img3.classList.contains("right-img") === true){
        img3.classList.remove("right-img");
        img3.classList.add("left-img");
        img3.style.animation = "none";
    }
});


arrowLeft.addEventListener("click", function(){
    if(img1.classList.contains("left-img") === true){
        img1.classList.remove("left-img");
        img1.classList.add("right-img");
        img1.style.animation = "none";
    }
    else if(img1.classList.contains("center-img") === true){
        img1.classList.remove("center-img");
        img1.classList.add("left-img");
        img1.style.animation = "none";
    }
    else if(img1.classList.contains("right-img") === true){
        img1.classList.remove("right-img");
        img1.classList.add("center-img");
        img1.style.animation = "right-center 1s linear";
    }

    if(img2.classList.contains("left-img") === true){
        img2.classList.remove("left-img");
        img2.classList.add("right-img");
        img2.style.animation = "none";
    }
    else if(img2.classList.contains("center-img") === true){
        img2.classList.remove("center-img");
        img2.classList.add("left-img");
        img2.style.animation = "none";
    }
    else if(img2.classList.contains("right-img") === true){
        img2.classList.remove("right-img");
        img2.classList.add("center-img");
        img2.style.animation = "right-center 1s linear";
    }

    if(img3.classList.contains("left-img") === true){
        img3.classList.remove("left-img");
        img3.classList.add("right-img");
        img3.style.animation = "none";
    }
    else if(img3.classList.contains("center-img") === true){
        img3.classList.remove("center-img");
        img3.classList.add("left-img");
        img3.style.animation = "none";
    }
    else if(img3.classList.contains("right-img") === true){
        img3.classList.remove("right-img");
        img3.classList.add("center-img");
        img3.style.animation = "right-center 1s linear";
    }
});


let sideLine = document.querySelector(".side-line");
let totalHeight = document.body.scrollHeight - window.innerHeight;

document.addEventListener("scroll", function(){
    let progressHeight = (window.scrollY / totalHeight) * 100;
    sideLine.style.height = progressHeight + "%";
});

