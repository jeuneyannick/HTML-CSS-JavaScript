var divs = document.querySelectorAll("div"); 

document.addEventListener("keypress", function(e){
    if(String.fromCharCode(e.charCode) == "r"){
        for(var i = 0; i < divs.length; i++){
            divs[i].style.backgroundColor = "red"
        }
} else if (String.fromCharCode(e.charCode) == "j"){
    for(var i = 0; i < divs.length; i++){
        divs[i].style.backgroundColor = "Yellow"
    }
} else if (String.fromCharCode(e.charCode) == "v"){
    for(var i = 0; i < divs.length; i++){
        divs[i].style.backgroundColor = "Green"
    } 

} else if (String.fromCharCode(e.charCode) == "b"){
    for(var i = 0; i < divs.length; i++){
        divs[i].style.backgroundColor = "blue"
    } 
}
})
