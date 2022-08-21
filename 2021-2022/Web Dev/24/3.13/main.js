const section = document.querySelector(".main");
const logo = document.querySelector(".like");
const FPS = 60;
section.style.height = window.innerHeight + "px";
section.style.width = window.innerWidth + "px";

// Logo moving velocity Variables
let xPosition = 10;
let yPosition = 10;
let xSpeed = 4;
let ySpeed = 4;
function update() {
  logo.style.left = xPosition + "px";
  logo.style.top = yPosition + "px";
}

setInterval(() => {
  if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
    xSpeed = -xSpeed;
  }
  if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
    ySpeed = -ySpeed;
  }

  xPosition += xSpeed;
  yPosition += ySpeed;
  update();
}, 1000 / FPS);


window.addEventListener("resize", () => {
  xPosition = 10;
  yPosition = 10;

  section.style.height = window.innerHeight + "px";
  section.style.width = window.innerWidth + "px";
});
