console.log(document.body.childNodes[5].childNodes[1]); 

//Selection des éléments selon leur balise 
//getElementsByTagName("") renvoie la liste d'élements portant la même nom de balise qui a été passé en paramètres

var titreElts = document.getElementsByTagName("h2");// selectionne tous les h2
console.log(titreElts[0]);
console.log(titreElts.length);

//Selection des éléments selon leur classe
//getElementsByClassName("") renvoie la liste d'élements portant le nom de la classe passé en paramètres.
//la recherche concerne les sous-elements du noeud sur lequel il est appliqué. 

var merveillesElts = document.getElementsByClassName("existe"); 

console.log(merveillesElts); 
//Parcourir les classes de la collection
for( var i= 0; i < merveillesElts.length; i++){
    console.log(merveillesElts[i]); 
}

//Selection d'un élément portant l'identifant "nouvelles"
console.log(document.getElementById("nouvelles"));

//Selection à partir d'un selecteur CSS
//La méthode querySelectorAll permet de rechercher des élements à partir de leur sélecteur CSS
//Elle renvoie la liste des elements correspondant au selecteur passé en paramètre (CSS ou non)

console.log(document.querySelectorAll("p").length);// affiche 3
console.log(document.querySelectorAll("#contenu p").length);// affiche 2
console.log(document.querySelectorAll(".existe").length)//affiche 8
console.log(document.querySelectorAll("#antiques > .existe").length);// affiche 1


//la methode querySelector renvoit uniquement le premier élément correspondant au selecteur passé en paramètre
console.log(document.querySelector("p")); 
/////////////////////////////////////////////////////////////////////////

//Obtenir des informations sur les éléments 

// Récupérer le contenu HTML
//la propriété HTML permet de récuperer tout le contenu HTML d'un élément du DOM

console.log(document.getElementById("contenu").innerHTML); 

//Récuperer le contenu textuel 
//la propriété textContent renvoie tout le contenu textuel d'un élement du DOM, sans les balises à la différence innerHTML

console.log(document.getElementById("contenu").textContent); 

//Les attributs

console.log(document.querySelector("a").getAttribute("href")); 

//l'id de la première liste 
console.log(document.querySelector("ul").id); 
//l'attribut href du premier lien 
console.log(document.querySelector("a").href); 

// Pour vérifier la presence d'un attribut, on utilise la méthode hasAttribute()
if(document.querySelector("a").hasAttribute("target")){
   console.log("le premier lien possède l'attribut target");
} else {
    console.log("le premier lien ne possède pas l'attribut target");
}; 


// Les classes 
// la propriété classList récupère la liste des classes d'un élément du DOM
var classes = document.getElementById("antiques").classList; 
console.log(classes.length);//Affiche 1: l'élement possède une seule classe
console.log(classes[0]); //affiche Merveilles

//la méthode contains() permet de vérifier la présence d'une classe dans un élément du DOM
if(document.getElementById("antiques").classList.contains("merveille")){
    console.log("L'élément identifié par antiques possède la classe merveille"); 
} else{
    console.log("L'élément identifié par antiques ne possède pas la classe merveille"); 
}