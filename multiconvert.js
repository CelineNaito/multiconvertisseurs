// écrire les différentes fonctions de conversion

function convertPieds(pieds){
    var pieds= prompt("Entrez une valeur en pieds: ");
    var result = pieds/ 3.28 ;
    return result;
    
}

function convertMiles(miles){
    var miles= prompt("Entrez une valeur en miles: ");
    var result= miles * 1.6 ; 
    return result;
    
}

function convertNoeuds(noeuds){
    var noeuds= prompt("Entrez une valeur en noeuds: ");
    var result =noeuds * 1.852 ;
    return result;
    
}
// créer un fonction pour démarrer
// attention a crééer un boolean pour avoir True
function startConvert() {
    var start = prompt("Voulez-vous convertir une valeur? Oui/Non");
    if (start == "Oui"){
        return true;
    }
    else {
        return false;
    }
}
//créer une fonction pour choisir la converstion
function quelleConvert(quelConvert){
    var quelConvert = prompt("Voulez-vous convertir des pieds en mètres (p/m) des miles en km (m/km) des noeuds en kmh (n/kmh)");
    if (quelConvert == "p/m"){
        alert(convertPieds());
    }
    else if (quelConvert == "m/km"){
        alert(convertMiles());
    }
    else if (quelConvert== "n/kmh"){
        alert(convertNoeuds());
    }
    else {
        console.log("Cette conversion est impossible.")
    }
    var message = "Le résultat est " + result.toString;
    alert(message);
    // added start convert in the function so that you have a loop back to the beginning??
    startConvert();

}

//créer un loop

while (startConvert()){
    
    console.log(quelleConvert());
    
}