// modifier le style d'un élément avec la propriété style

var pElt = document.querySelector("p"); 
pElt.style.color = "indianred"; 
pElt.style.margin = "50 px"; 

//Poour les propriétés CSS composés, écrire dans le même modèle

pElt.style.fontFamily = "Arial"; 
pElt.style.backgroundColor = "black";

// Pour accéder au style se trouvant sur les feuilles de style, utiliser la fonction getComputedStyle() avec en paramètre le noeud du DOM en question

var stylePara = getComputedStyle(document.getElementById("para")); 
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleue en valeurs RGB