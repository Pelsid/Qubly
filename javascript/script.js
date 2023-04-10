/* clok */

onload = setTimeout(function Tm(){
  let now = new Date();
  let nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff = nextDay - now;
  let h = Math.floor(diff / (1000 * 60 * 60));
  let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((diff % (1000 * 60)) / 1000);
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  document.getElementById("hour").innerText = `${h}`;
  document.getElementById("minutes").innerText = `${m}`;
  document.getElementById("seconds").innerText = `${s}`;
  setTimeout(Tm, 1000);
}
)

/* slider */

const quantity = document.querySelectorAll('.stages__description').length;
const buttons = document.querySelectorAll('.stages__shift');
const slider = document.querySelector("#slider");

let maxWidth = null;
let left = null;
let shift = null;
let cliks = 1;

if (window.innerWidth <= 500) {
  shift = 370;
  maxWidth = quantity * shift;
  slider.style.width = maxWidth + 'px';
} else if (window.innerWidth <= 1200) {
  shift = 520;
  maxWidth = quantity * shift;
  slider.style.width = maxWidth + 'px';
}

function sliderLeft() {
  if (cliks !== 1) {
    left = left + shift;
    slider.style.left = left + 'px';
    cliks--;
  }
}

function sliderRight() {
  if (cliks !== quantity) {
    left = left - shift;
    slider.style.left = left + 'px';
    cliks++;
  }
}

/* if cursor outside the window */

const discount = document.querySelector("#discount");
const close = document.querySelector("#close");

window.addEventListener('mouseout', function(event) {
  if (event.clientY <= 0 || event.clientX <= 0 || event.clientY >= window.innerHeight || event.clientX >= window.innerWidth) {
    discount.style.display = "flex";
  }
});

close.onclick = function() {
  discount.remove();
};

/* hiiden bloks */

onload = Tm();
var n;
function Tm(){
    Live();
    setTimeout(function (){Dead()}, 10000);
    setTimeout(function (){Tm()}, 10500);
}

function Live(){
    Rand();
    document.getElementById(n).style.right = "0";
}

function Dead(elem){
    if(elem != undefined)
        elem.parentNode.style.right = "-400px";
    else
        document.getElementById(n).style.right = "-400px";
}

function Rand(){
    n = Math.floor(Math.random() * 3 + 1);
}