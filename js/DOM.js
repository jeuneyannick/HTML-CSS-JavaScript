
var h = document.head; //la variable h correspond l'objet head du DOM 
console.log(h); 
var b = document.body;// la variable b correspond à l'objet body du DOM
console.log(b); 

if(document.body.nodeType === document.ELEMENT_NODE){
   console.log("Body est un noeud élément"); 
} else{
    console.log("Body est un noeud textuel"); 
}; 
//Il y a deux types de noeud dans l'arborescence d'objets du DOM
// les ELEMENT_NODE qui sont des noeuds éléments qui peuvent avoir des enfants ou des sous-enfants
// les TEXT_NODE qui sont des noeuds textuels. 
//la propriété nodeType permet d'indiquer le type de noeud d'un objet du DOM. 

//Pour accéder au premier enfant du noeud body avec la propriété childNodes
 console.log(document.body.childNodes[0]); 

 //Si cela ne renvoie rien c'est parce que les espaces entre les balises et les auts à la ligne dans le code HTML 
 //sont considérés par le navigateur comme des noeuds textuels. 

 console.log(document.body.childNodes[1]); 


 //Afficher les noeuds enfants du body 

 for ( var i = 0; i < document.body.childNodes.length;i++){
     console.log(document.body.childNodes[i]); 
 }; 

 // Accéder au parent d'un noeud 

 var h1 = document.body.childNodes[1]; 
 console.log(h1.parentNode);// affiche l'objet body
 console.log(document.parentNode); //affiche Null, document est à la racine du DOM il n'a logiquement pas de parent



 // Exercice

 /*
 Exercice : afficher l'enfant d'un objet du DOM
*/

// Affiche un enfant d'un objet du DOM
// Le paramètre noeud est l'objet du DOM
// Le paramètre indice est l'indice de l'enfant à afficher
function afficherEnfant(noeud, indice) {
    // TODO : compléter la fonction
    console.log(noeud)
}

// Doit afficher le noeud h1
afficherEnfant(document.body, 1);

// Doit afficher l'erreur "Indice incorrect"
// L'indice demandé est négatif
afficherEnfant(document.body, -1);

// Doit afficher l'erreur "Indice incorrect"
// Le noeud body a moins de 9 noeuds enfants
afficherEnfant(document.body, 8);

// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 0);

