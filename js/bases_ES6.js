// let et const 
/*
Const : On est obligé de lui assisgner une valeur d'emblée. 
On ne peut pas changer sa valeur. C'est une "constante"
*/
const x = {app : "Ceci est mon application"}; 
x.app = "Ceci est ma nouvelle application"; 
x.app3 = " Voici une autre application"; 
x. app3 = " une autre application"; 
console.log(x)
/*
Attention : On ne peut assigner une valeur à const qu'une seule fois. Cependant dans si c'est un objet on peut 
modifier les propriétés. Mais on ne peut pas lui assigner un nouvel objet ou un nouveau type. 
*/
/*
console.log(y);
let y;
Erreur en ES6 : Le hoisting ne fonctionne pas avec let. y n'est pas remonté. pareil avec const, avec lequel il aurait de toute manière été obligé d'assigner une valeur
*/

// Scope de bloc avec let et const 
  function first(){ // bloc parent 
      let a = 5;

      if(a > 3){ // bloc enfant 
          console.log(a); 
      }
  }
/*
La règle de base avec les scope de bloc est que les blocs enfant ont accès aux variables du bloc parent.
avec let, le bloc parent n'a pas accès aux variables du bloc enfant. 
*/ 
  first(); 

    {// bloc enfant 
     let a = 5;      
    } 
console.log(a);// se trouve dans le scope global = bloc parent
//  Erreur ! le bloc du scope global n'a pas accès à la variable a. 

