var compteurElt = document.getElementById("compteur"); 

//fonction qui diminue le compteur jusqu'à 0
function diminuerCompteur(){
    //Conversion en nombre du texte compteur
    var compteur = Number(compteurElt.textContent); 
    if ( compteur > 1){
        compteurElt.textContent = compteur - 1;
    } else {
        //Annule l'éxécution répétée
        clearInterval(intervalId); 
        var titre = document.getElementById("titre"); 
        titre.textContent = "BOOOUM !!!"; 
        //Modification du titre au bout de 2 secondes 
        setTimeout(function(){
            titre.textContent = "Tout est cassé :("; 
        }, 2000)
    }
}

//Appelle la fonction diminuerCompteur toutes les secondes (1000 milisecondes)
var intervalId = setInterval(diminuerCompteur, 1000); 

// setInterval est une fonction qui permet d'appeler une autre fonction à intervalles réguliers 
//setTimeout permet d'exécuter une fonction une seule fois après un certain délai, exprimé en millisecondes


var bloc = document.getElementById("bloc") 
var vitesse = 7; //Valeur du déplacement en pixels

//Déplace le bloc sur sa gauche
// Déplace le bloc sur sa gauche
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    // Déplacement du bloc
    bloc.style.left = (xBloc + vitesse) + "px";
    // Demande au navigateur d'appeler deplacerBloc dès que possible
    requestAnimationFrame(deplacerBloc);
}
requestAnimationFrame(deplacerBloc); // Début de l'animation 
//La fonction requestAnimationFrame  permet de demander au navigateur d'executer dès que possible 
//une fonction qui met à jour une animation 

