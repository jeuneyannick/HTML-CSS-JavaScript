//Fonction AJAX générique 
function ajaxGet(url,callback){
    var req = new XMLHttpRequest(); 
    req.open("GET", url); 
    req.addEventListener("load", function(){
        if(req.status >= 200 && req.status < 400){
            callback(req.responseText); 
        } else {
            console.error(req.status + " " + req.statusText + " " + url); 
        }
    })
    req.addEventListener("error", function(){
        console.error("Erreur réseau dans l'URL" + url); 
    }); 
    req.send(null); 
}

function afficher (reponse){
    console.log(reponse); 
}

ajaxGet("http://localhost:8888/javascript-web-srv/data/langages.txt", afficher); 
//Objet javascript 
var avion = {
    marque: "Airbus", 
    couleur:"A320"
}; 

console.log(avion); 
//Transfome l'objet JavaScript en chaîne de caractères JSON
var texteAvion = JSON.stringify(avion); 
console.log(texteAvion); 
// Transforme la chaine de caractères JSON en objet JavaScript
console.log(JSON.parse(texteAvion)); 

var avions = [
    {
        marque: "Airbus", 
        couleur: "A380"
    },
    {
        marque: "Airbus", 
        couleur: "A380"
    }
]; 

console.log(avions); 
//Transforme le tableau d'objets J en chaine de caractères JSON
var texteAvions = JSON.stringify(avions); 
console.log(texteAvions); 
// Transforme le chaine de caractères JSON en tableaux d'objets JavaScript
console.log(JSON.parse(texteAvions)); 

// ajaxGet("http://localhost:8888/javascript-web-srv/data/films.json", function (reponse){
//     // Transforme la réponse en tableau d'objets JavaScript
//     var films = JSON.parse(reponse); 
//     //Affiche le titre de chaque film
//     films.forEach(function(film){
//         console.log(film.titre); 
//     });
// } );

//Afficher les langages dans ajax.html

// ajaxGet("http://localhost:8888/javascript-web-srv/data/langages.txt", function(reponse){

//    var splitRep = reponse.split(";"); 
//    console.log(splitRep); 
//     splitRep.forEach(function(rep){
//         var lang = document.createElement("li"); 
//         var languages = document.getElementById("langages"); 
//         lang.textContent = rep; 
//         languages.appendChild(lang); 
//     })
// })


// ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
//     var tableaux = JSON.parse(reponse);
//     var tableauxElt = document.getElementById("tableaux");
//     tableaux.forEach(function (tableau) {
//         // Crée une ligne de tableau HTML pour chaque tableau
//         var ligneElt = document.createElement("tr");
//         ligneElt.innerHTML = "<td>" + tableau.nom + "</td>" + "<td>" + tableau.annee + "</td>" +
//             "<td>" + tableau.peintre + "</td>";
//         tableauxElt.appendChild(ligneElt);
//     });
// }); 