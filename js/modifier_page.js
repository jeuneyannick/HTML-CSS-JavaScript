// Modifier un element d'une page HTML avec innerHTML
document.getElementById("langages").innerHTML += '<li id="c">C</li>';
// Vider un élément
// document.getElementById("langages").innerHTML = ' '; 

//Modification d'un élément textuel d'une page HTML
document.querySelector("h1").textContent += " de programmation web."; 
// Définir un attribut 
// document.querySelector("h1").setAttribute("id","titre"); 
document.querySelector("h1").id = "titre"; 

//Gestion des classes avec ClassList
var titreElt = document.querySelector("h1"); 
titreElt.classList.remove("debut");
titreElt.classList.add("titre");