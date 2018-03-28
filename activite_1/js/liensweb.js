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

listeLiens.forEach(function(lien){
    //ciblage de l'éléménet du DOM
    var contenu = document.getElementById("contenu");

    //Création des nouveaux élements 
    var divLink = document.createElement("div"); 
    var link = document.createElement("a"); 
    var str = document.createElement("strong")
    var spanElt = document.createElement("span")
    
    // Assignation d'attributs aux élements creés 
    divLink.classList.add("lien"); 
    link.href = lien.url;

    //Insertion du contenu textuel dans les élements creés
    link.textContent = lien.titre;
    spanElt.textContent = "Ajouté par " + lien.auteur;

    // Ajout du style
    link.style.textDecoration = "none"; 
    link.style.color = "#428bca";
    
    //Insertion des élements entre eux avant l'ajout dans la page
    str.appendChild(link) 
    divLink.appendChild(str); 
    divLink.innerHTML += " " + lien.url + "<br/>";
    divLink.appendChild(spanElt); 
    contenu.appendChild(divLink); 
}); 