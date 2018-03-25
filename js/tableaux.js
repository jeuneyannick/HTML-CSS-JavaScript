var livres = [ "CSS3 Flexbox","HTML5: guide pour le developpeur web","Apprenez la programmation objet avec PHP"]; 

console.log(livres.length); 
livres.forEach(function(livre){
    console.log(livre); 
}); 

for(i=0; i < livres.length; i++){
    console.log(livres[i]); 
}; 

livres.push("Revivification de la spiritualité musulmane"); 
console.log(livres); 


var books = {
         init: function(nom,auteur,sujet){
             this.nom = nom; 
             this.auteur = auteur; 
             this.sujet = sujet; 
         },
         decrire: function(){
             var description = this.auteur + " a écrit " + this.nom + " qui parle de " + this.sujet; 
             return description; 
         },  
}

var book1 = Object.create(books); 
book1.init("Mukhtasar Minhaj Al Qasidin", "Ibn Qudama Al Maqdisi", "spiritualité"); 

var book2 = Object.create(books); 
book2.init("Madarij As Salikin", "Ibn Qayyim Al Jawziyyah", "spiritualité"); 

var book3 = Object.create(books); 
book3.init("Maqasid Ash Shari'ah", "Muhammad Tahar Ibn 'Ashur", "usul Al Fiqh"); 


var bibliotheque = []; 

bibliotheque.push(book1); 
bibliotheque.push(book2); 
bibliotheque.push(book3); 


bibliotheque.forEach(function(book){
    console.log(book.decrire()); 
}); 


var mousquetaires = []

mousquetaires.push("Portos"); 
mousquetaires.push("Athos"); 
mousquetaires.push("Aramis"); 

for (i = 0; i < mousquetaires.length;i++){
    console.log(mousquetaires[i]); 
}

var savant = {
    init: function(nom,fiqh,specialite){
        this.nom = nom; 
        this.fiqh = fiqh; 
        this.specialite = specialite; 
    },
    decrire: function(){
        var description = this.nom + ", " + this.fiqh + ", " + this.specialite; 
        return description; 
    }
}; 
 var savant1 = Object.create(savant);
 var savant2 = Object.create(savant);
 var savant3 = Object.create(savant);
 var savant4 = Object.create(savant);

savant1.init("Ibn Taymiyyah","Hanbalite","Aqida");
savant2.init("Al Ghazali","Shafi'ite","Tasawwuf");
savant3.init("Shah WaliuLllah Ad Dahlawi","Hanafite","Aqida");
savant4.init("Ahmad Zarruq","Malikite","Tasawwuf");

var savants = [savant1, savant2, savant3, savant4]; 



savants.forEach(function(savant){
    console.log(savant.decrire());
}); 


