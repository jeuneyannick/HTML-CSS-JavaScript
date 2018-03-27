/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

var contenu = document.getElementById("contenu");//On cible la div
var ul = document.createElement("ul");//Creation d'un ul 
var li = document.createElement("li");//Creation d'un li

listeLiens.forEach(function(lien){
    var a = document.createElement("a"); 
     a.textContent = lien.url; 
     contenu.appendChild(a); 
     console.log(a)
})
