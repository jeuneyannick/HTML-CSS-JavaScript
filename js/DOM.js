var h = document.head;// la variable h contient l'objet head du DOM
console.log(h); 

var b = document.body;//la variable b contient l'objet body du DOM
console.log(b); 

if(document.body.nodeType === document.ELEMENT_NODE){
    console.log("Body est un noeud élément"); 
} else {
    console.log("Body est un noeud textuel"); 
}

//Accéder aux enfants d'un noeud élément 
console.log(document.body.childNodes[0]); 
//Les espaces entre les balises et les sauts de ligne dans le code sont considérés par le navigateur comme des éléments textuels.

console.log(document.body.childNodes[1]); 

//Parcourir la liste des noeuds enfants 
var enfants = document.body.childNodes;
//  console.log(enfants); 

//Parcourir la liste des noeuds enfants avec la méthode forEach
enfants.forEach(function(enfant){
    console.log(enfant); 
}); 
//Parcourir la liste des noeuds enfants avec la boucle For
for( var i = 0; i < enfants.length; i++){
    console.log(enfants[i]); 
}; 
//Accéder au parent d'un noeud
var h1 = document.body.childNodes[1]; 
console.log(h1.parentNode);// Affiche le noeud body

console.log(document.parentNode);// Affiche null: document n'a aucun noeud parent