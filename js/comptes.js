// TODO : ajoutez ici la définition des objets nécessaires
var CompteBancaire = {
    initCB: function(nom,solde){
        this.nom = nom; 
        this.solde = solde; 
    },
    decrire:function(){
        var description = " Titulaire: " + this.nom + ", solde: " + this.solde + " euros";
        return description;  
    }, 
    debiter: function(montant){
       this.solde =  this.solde - montant; 
    },
    crediter: function(montant){
        this.solde = this.solde + montant; 
    }, 
}; 

var CompteEpargne = Object.create(CompteBancaire); 

CompteEpargne.initCE = function(nom,solde,taux){
    this.initCB(nom,solde); 
    this.taux = taux; 
}

CompteEpargne.ajouterInterets = function(){
    var tauxInterets = this.solde * this.taux; 
    this.solde += tauxInterets; 
}






var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());