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

//Ajouter un nouvel élément 
/*
L'ajout d'un nouvel élément se fait en 3 étapes: 
1.Création d'un nouvel élément
2.Définitions des informations de l'élément//
3.Insertion de l'élément dans le DOM
*/

var JavaScriptElt = document.createElement("li");// Création du nouvel élement
JavaScriptElt.textContent += "JavaScript"; // Ajout du contenu textuel 
JavaScriptElt.id = "Javascript";// Ajout de l'identifiant 
document.getElementById("langages").appendChild(JavaScriptElt);// Insertion de l'élement dans le DOM

/*

*/

var rubyElt = document.createElement("li"); 
rubyElt.id = "Ruby"; 
rubyElt.appendChild(document.createTextNode("Ruby")); 
document.getElementById("langages").appendChild(rubyElt); 


// Ajout d'un noeud avant ou après un autre noeud 
 
var perlElt = document.createElement("li"); 
perlElt.id = "perl"; 
perlElt.textContent += "Perl"; 
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));// la méthode insertBefore prendre en paramètre le noeud à ajouter et le noeud avant lequel le nouveau sera passé.


// Ajouter un noeud de manière plus précise avec la méthode insertAdjacentHTML()
// insertAdjacentHTML() prend en paramètres une position et le contenu HTML qu'on veut ajouter il y a quatre positions: 
/*
"beforeBegin": placement avant l'élément existant selectionné
"afterbegin": placement à l'interieur de l'élément, avant son premier enfant 
"beforeend": placement à l'intérieur de l'élément, après son dernier enfant
"afterend": placement après l'élement selectionné lui même.
*/
document.getElementById("langages").insertAdjacentHTML("beforeend", '<li id="Java">Java</li>'); 

//Remplacer un élement par un autre ou le supprimer 

var bashElt = document.createElement("li"); 
bashElt.id = "Bash"; 
bashElt.textContent += "Bash"; 

document.getElementById("langages").replaceChild(bashElt, perlElt);// replaceChild()permet de remplacer un élément en prenant en paramètre le nouvel élement puis l'ancien à remplacer
document.getElementById("langages").removeChild(bashElt); //removeChlid permet de supprimer un élément en prenant en paramètres le noeud à supprimer du DOM


////Exercices///

var pElt = document.createElement("p");
var lienElt = document.createElement("a");
lienElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lienElt.textContent = "liste";
pElt.appendChild(document.createTextNode("En voici une "));
pElt.appendChild(lienElt);
pElt.appendChild(document.createTextNode(" plus complète."));
document.getElementById("contenu").appendChild(pElt);