// Utiliser des API WEB 

// var articlesElt = document.getElementById("articles"); 
// ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function(reponse){
//     //Transforme la réponse qui est en format JSON en un tableau d'articles
//     var articles = JSON.parse(reponse); 
//     articles.forEach(function(article){
//         //Ajout du titre et du contenu de chaque article
//         var titreElt = document.createElement("h2"); 
//         titreElt.textContent = article.titre; 
//         var contenuElt = document.createElement("p"); 
//         contenuElt.textContenu = article.contenu; 
//         articlesElt.appendChild(titreElt); 
//         articlesElt.appendChild(contenuElt); 
//     })
// }); 

var preMinElt = document.getElementById("premMin"); 

//Accès aux informations publiques sur le Premier Ministre

ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function(reponse){
    // Conversion des données JSON en objets JavaScript
    var premierMinistre = JSON.parse(reponse); 
    //Ajout de la description et du logo dans la page web
    var descriptionElt = document.createElement("p"); 
    descriptionElt.textContent = premierMinistre.description; 
    var logoElt = document.createElement("img"); 
    logoElt.src = premierMinistre.logo; 
    preMinElt.appendChild(descriptionElt); 
    preMinElt.appendChild(logoElt); 
}); 