// // Création d'une requête HTTP

// var req = new XMLHttpRequest(); 

// //Requête HTTP GET syncrone vers le fichier langages.txt publié localement
// req.open("GET", "http://localhost:8888/javascript-web-srv/data/langages.txt", false); 
// //Envoi de la requête 
// req.send(null); 
// //Affiche la réponse reçue pour la requête 
// console.log(req.responseText); 

// var req = new XMLHttpRequest(); 


// //La requete est asynchrone lorsque le 3ème paramètre vaut true ou est absent
// req.open("GET", "http://localhost:8888/javascript-web-srv/data/langages.txt"); 

// //Gestion de l'evenement indiquant la fin de la requête 

// req.addEventListener("load", function(){
//     //gestion des erreurs
//     if(req.status >= 200 && req.status < 400){
//         //le serveur a réussi à traiter la requete 
//         console.log(req.responseText)
//     } else{
//         //Affichafe des informations sur l'échec du traitement de la requête
//         console.error(req.status + " " + req.statusText); 
//     }

// }); 

// req.addEventListener("error", function(){
//     // la requete n'a pas réussi à atteindre le serveur
//     console.error("Erreur réseau"); 
// })
// req.send(null); 