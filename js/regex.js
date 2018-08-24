//Expressions régulières 

var regex = /@/; //La chaine doit contenir un @; 
console.log(regex.test('super'));//Affiche false; 
console.log(regex.test('bleyyannick@gmail.com')); //Doit afficher @

var regex3 = /abc/; // la chaine doit avoir "abc";
console.log(regex3.test("abcef")); 
console.log(regex3.test("uaeiyz")); 

var regex4 = /[a-z]/;//la chaine contient n'importe quelle lettre minuscule de l'alphabet
console.log(regex4.test("qjdnkjsqhdkh")); //true
console.log(regex4.test("678787987"));//false

var regex5 = /[0-9]/; //La chaine doit contenir un chiffre
console.log(regex5.test("sqdksd77!è"))//true; 
console.log(regex5.test("gygyuguygi"))//false; 

var regex6 = /a.c/// la chaine contient un a suivi d'un autre caractère suivi d'un c
console.log(regex6.test("aTc"))//true
console.log(regex6.test("arrc"))//false

var regex7 = /a\.c/// la chaine contient "a.c"; 
console.log(regex7.test("a.c"))// true
console.log(regex7.test("alclcl"))//false

var regex8 = /a.+c/// La chaine contient "a" suivi d'un ou plusieurs caractères (n'importe lesquels) suivi de c
console.log(regex8.test("ahskhkjshdkc"))//true
console.log(regex8.test("hkhskQHHK"))//false

var regex9 = /a.*c///la chaine contient "a" suivi de zéro ou plusieurs caractères suivi de "c"
console.log(regex9.test("ac"))//true; 
console.log(regex9.test("yybbybsISBCA"))//false

/*

Les crochets[] définissent un intervalle de caractères. Toute chaîne contenant au moins un caractère dans cet intervalle correspondra au motif. Les motifs[a-z] et[A-Z] permettent de rechercher n'importe quelle lettre de l'alphabet, respectivement en minuscules ou en majuscules.

Les motifs équivalents[0-9] et\d permettent de rechercher un chiffre.

Le caractère point.permet de remplacer n'importe quel caractère.

Le caractère\("antislash" ou "backslash") indique que le caractère qui suit doit être recherché en tant que tel. Par exemple,\. permet de rechercher le caractère..

Le caractère+permet de rechercher une ou plusieurs occurrences de l'expression qui le précède.

Le caractère*permet de rechercher zéro ou plusieurs occurrences de l'expression qui le précède.




*/