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


var Personnage = {
    nom:"", 
    sante:0, 
    force:0, 
    xp:0, 
    decrire:function(){
        var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et"
        + this.xp +" points d'experience"; 
        return description; 
    }
}; 

var Personnage = {
    init: function(nom,sante,force){
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0; 
    }, 
    decrire:function(){
        var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et"
        + this.xp +" points d'experience"; 
        return description; 
    }


}; 

var joueur1 = Object.create(Personnage); 
joueur1.init("Yannick",200,40); 

var joueur2 = Object.create(Personnage); 
joueur2.init("Soukaina",210,30); 

console.log(joueur1.decrire()); 
console.log(joueur2.decrire()); 

var Adversaire = Object.create(Personnage); 
 Adversaire.initAdversaire = function(nom,sante,force,race,valeur){
     this.init(nom,sante,force); 
     this.race = race; 
     this.valeur = valeur; 
 }; 
 

var monstre = Object.create(Adversaire); 
monstre.initAdversaire("Vilain",130,100,"Kraken",45); 
console.log(monstre.decrire()); 

console.log("Un affreux monstre arrive: c'est un " + monstre.race + " nommé "+ monstre.nom);


var BasicPerso = {
    initPerso: function(nom,sante,force){
        this.nom = nom; 
        this.sante = sante; 
        this.force = force; 
    }, 
    attaquer: function(cible){
        if(this.sante > 0){
            var degats = this.force; 
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts"); 
            cible.sante = cible.sante - degats; 

            if(cible.sante > 0){
                console.log(cible.nom + " a encore " + cible.sante + " points de vie"); 
            } else {
                cible.sante = 0; 
                console.log(cible.nom + " est mort");  
            }
        } else {
            console.log(cible.nom + " ne peut pas être attaqué : il est mort !!"); 
        }    

       }

   }

var joueur = Object.create(BasicPerso); 
joueur.initJoueur = function(nom,sante,force){
    this.initPerso(nom,sante,force); 
    this.xp = 0; 
}; 

joueur.decrire = function(){
    var description = this.nom + " a " + this.sante + " points de vie , " + this.force + " en force et " + this.xp + " points d'experience"; 
    return description; 
};

var joueur1 = Object.create(joueur); 
joueur1.initJoueur("Luqman",400,50); 
console.log(joueur1.decrire()); 

var joueur2 = Object.create(joueur);
joueur2.initJoueur("Rahim", 380,50); 


console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros"); 
console.log(joueur1.decrire()); 
console.log(joueur2.decrire()); 

var Zorg = Object.create(Adversaire);
Zorg.initAdversaire("Zorg",200,40,"Vampire",30); 

console.log(Zorg.decrire())


joueur1.attaquer(Zorg); 


    Zorg.attaquer = function(cible) {
        if(this.sante > 0){
            var degats = this.force; 
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégats"); 
            cible.sante = cible.sante - degats; 

            if(cible.sante > 0){
                console.log( cible.nom + " s'est fait attaqué mais a encore " + cible.sante + " de points de vie"); 
            } else {
                cible.sante = 0; 
                console.log(cible.nom + " s'est fait attaqué et a perdu tous ses points de vie."); 
            } 

        } else {
            console.log( cible.nom + " est déja mort ! ne t'acharne pas"); 
        }
    }

console.log(Zorg.decrire());  

Zorg.attaquer(joueur2); 
Zorg.attaquer(joueur1); 

 