// burger / correction bug burger / button hidden /  parallax  / gallery
// la galerie : https://www.cssscript.com/mobile-compatible-responsive-gallery-hesgallery/


// ======================  burger : ===================
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
// var openBtn = document.getElementsByClassName("burger-icon")
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener('click', function(event){
  event.preventDefault //pourquoi il ne marche pas lui ?
  openNav()  
})

// openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

// ======================  Correction bug burger (le menu qui ne disparait pas) ===================
let menuElements = document.getElementsByClassName("menuLinks");

for (var i=0; i < menuElements.length; i++) {
  menuElements[i].onclick = function(){      
    sidenav.classList.remove("active")
  }
}


// ======================  button hidden : ===================
var nbDeToggles=5 //A remplir à la main.
for (var i = 1; i<=nbDeToggles; i++){
  var tEnCours = ("t"+i);
  var toggEnCours = ("togg"+i);
  // console.log("le t en cours : "+tEnCours)
  // console.log("le toggle en cours : "+toggEnCours);

  let toggBoucle = document.getElementById(toggEnCours);
  let tBoucle = document.getElementById(tEnCours);
    toggBoucle.addEventListener("click", () => {
      console.log("click")
    if(getComputedStyle(tBoucle).display != "none"){
      tBoucle.style.display = "none";
    } else {
      tBoucle.style.display = "block";
    }
  })
}
// ======================  Parallax : ===================
var imageParallax = document.getElementsByClassName('parallaxedpic');
new simpleParallax(imageParallax,
   {
	scale: 1.9,
  orientation: 'down'
});
console.log("parllaxed trouvé ? : "+ imageParallax)

//marche pas celle la :   (marche en right ou left mais pas up down)
var imageParallax2 = document.getElementsByClassName('parallaxedpicmore');
new simpleParallax(imageParallax2,
   {
	scale: 3,
  orientation: 'down'
});
console.log("parllaxedpicmore trouvé ? : "+ imageParallax2)

// ======================  Galery ===================
// elle fonctionne bien, ici un script pour remplir le HTML avec le images trouvées dans le dossier


