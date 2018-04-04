//Afficher la liste des questions ainsi qu'un bouton 

var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];



var contenu = document.getElementById("contenu"); 

questions.forEach(function(question){
    var div = document.createElement("div"); 
    div.textContent += question.enonce; 
    contenu.appendChild(div); 
})
