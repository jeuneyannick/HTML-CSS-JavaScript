// //Creation d'un objet FormData

// var identite = new FormData(); 
// //Ajout d'information dans l'objet
// identite.append("login", "Yuss"); 
// identite.append("password", "azerty"); 

// //Creatuin et configuration d'une requete HTTP POST vers le fichier post_form.php
// var req = new XMLHttpRequest(); 
// req.open("POST", "http://localhost:8888/javascript-web-srv/post_form.php"); 
// //Envoi de la requête en y incluant l'objet
// req.send(identite);

//Execute un appel AJAX POST
//Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès 

function ajaxPost(url, data, callback, isJson ){
    var req = new XMLHttpRequest(); 
    req.open("POST", url); 
    req.addEventListener("load", function(){
        if (req.status >= 200 && req.status < 400 ){
            //Appel de la fonction callback en cas de reussite de la requete en lui passant la réponse
            callback(req.responseText); 
        } else {
            console.error(req.status + " " + req.statusText + " " + url ); 

        }
    }); 
    req.addEventListener("error", function(){
        console.error("Erreur réseaux avec l'URL" + url); 
    });
    if (isJson){
        //Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json"); 
        //Transformr la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data); 
    }
    req.send(data); 
}


var commande = new FormData(); 
commande.append("couleur", "rouge");
commande.append("pointure", "43");

//Envoi de l'objet FormData au serveur
ajaxPost("http://localhost:8888/javascript-web-srv/post_form.php", commande, function (reponse) {
    //Affichage dans la console en cas de succès
    console.log("Commande envoyée au serveur"); 

}); 


//Gérer la soumission d'un formulaire avec FormData

var form = document.querySelector("form"); 
//Gestion de la soumission du formulaire 
form.addEventListener("submit", function (e){
    e.preventDefault(); 
    //Récupération des champs du formualire dans l'objet FormData
    var data = new FormData(form); 
    //Envoi des données du formualire au serveur 
    //La fonction callback est ici vide
    ajaxPost("http://localhost:8888/javascript-web-srv/post_form.php", data , function () {
        console.log("c'est bon")
    }); 
}); 


 //Création d'un objet représentant un film

 var film = {
     titre: "Zootopie",
     annee: "2016", 
     realisateur: " Byron Howar et Rich Moore"
 }; 

 //Envoi de l'objet au serveur

 ajaxPost("http://localhost:8888/javascript-web-srv/post_json.php", film, function(reponse){
     //Le film est affiché dans la console en cas de succès
     console.log("Le film " + JSON.stringify(film) + " a été envoyé au serveur"); 

 }, true); //Valeur du paramètre Json);



