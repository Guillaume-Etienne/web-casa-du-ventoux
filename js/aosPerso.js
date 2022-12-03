// ======================  AOS script pour balancer des attributs AOS à toeus les paragraphs  ===================

let p1 = document.getElementsByClassName('paragraph');
let aosInfo = 'data-aos="fade-up"';

console.log("nombre d'occurences trouvé : " + p1.length)

let attP1 = p1.attributes; // Liste des attributs de p1

for (let p of p1)
{   
    p.setAttribute('data-aos', 'fade-up');
    console.log(p)  
}

// bien laisser l'init APRES ces modifs d'attibuts.
AOS.init();