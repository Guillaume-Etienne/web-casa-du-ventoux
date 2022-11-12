// AOS (animation des divs)   / Buger menu    /
// AOS.init(); //oui c'est tout, tout se fait direct dans le html

// burger / button hidden /

// ======================  burger : ===================
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
// var openBtn = document.getElementsByClassName("burger-icon")
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

// ======================  button hidden : ===================
let togg1 = document.getElementById("togg1");
// let togg2 = document.getElementById("togg2");
let t1 = document.getElementById("t1");
// let d2 = document.getElementById("d2");
togg1.addEventListener("click", () => {
  if(getComputedStyle(t1).display != "none"){
    t1.style.display = "none";
  } else {
    t1.style.display = "block";
  }
})

