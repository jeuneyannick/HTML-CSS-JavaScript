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