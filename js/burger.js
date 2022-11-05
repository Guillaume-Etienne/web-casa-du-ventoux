// AOS (animation des divs)   / Buger menu    /
AOS.init(); //oui c'est tout, tout se fait direct dans le html

// burger :

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

// language automatised selector

// Identifie and store selected language
const langSelector = document.getElementById('lang');
langSelector.addEventListener('click', function(event){
  // event.preventDefault()
  console.log('ça a cliqué ! la : '+ event.target)  
  var resultLang=event.target.toString() 

  if (resultLang.includes("es")){    
    localStorage.setItem("lang","es")
  }
  else if (resultLang.includes("en")){    
    localStorage.setItem("lang","en")
  }
  else{    
    localStorage.setItem("lang","fr")
  }
});

// detect and apply  -> on specific JS to work only on the index
