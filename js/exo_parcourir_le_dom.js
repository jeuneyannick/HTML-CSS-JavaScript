
// TODO : écrire la fonction compterElements

// compterElements = function (element){
//    var x = document.querySelectorAll(element).length; 
//    return x; 
    
// }

// console.log(compterElements("p")); // Doit afficher 4
// console.log(compterElements(".adjectif")); // Doit afficher 3
// console.log(compterElements("p .adjectif")); // Doit afficher 3
// console.log(compterElements("p > .adjectif")); // Doit afficher 2
// /////


function InfosLiens(){
    var instruments= document.querySelectorAll("a");  
    var NbrInstruments = instruments.length; 
    console.log(NbrInstruments)
    var ul = document.querySelector("ul"); 
    console.log(ul); 
}; 
InfosLiens(); 