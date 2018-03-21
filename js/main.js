//Les différents types de variables 

// Les booléens(boolean)
console.log(true);
console.log(false); 
// Les nombres (NUMBER)
console.log(54);
console.log(6.7); 
// Les chaines de caractères (STRING)
console.log("je réapprends les bases de JavaScript")
//Undefined
//C'est une variable déclarée qui n'a pas encore de valeur définie
console.log(undefined); 
//Null 
console.log(null)
//Les objets 
console.log({name:" Yannick "}); 


var a 

console.log(a); 

/* Hoisting des fonctions 
Bien que fonctionnant de manière séquentielle, JavaScript recherche d'abord les déclaration de fonctions et
les fait monter dans le code (il les hisse d'où le nom de hoisting en anglais)
*/
addition(5,7); 

function addition(a,b){
    console.log(a + b); 
}
/*
Le hoisting de fonctions n'est valable que pour les déclarations de fonction et non pour les expressions de fonctions.
*/
// addition2(a,b); 
// var addition2 = function(a,b){
//     console.log(a + b); 
// }


console.log(x); 
var x = 5;


var perso = {
    nom: "Yannick", 
    sante: 150, 
    force: 25, 
    xp: 0, 
    decrire:function(){
        var description = this.nom + " a " + this.sante + " points de vie, "
        + this.force + " en force et " + this.xp + " points d'experience"; 
        return description; 
    }
};

console.log(perso.decrire()); 

var perso2 = Object.create(perso); 

