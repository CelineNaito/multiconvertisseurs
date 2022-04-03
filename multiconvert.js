// écrire les différentes fonctions de conversion

function convertPieds(pieds){
    pieds= prompt("Entrez une valeur en pieds: ");
    return pieds/ 3.28 ;
    
}

function convertMiles(miles){
    miles= prompt("Entrez une valeur en miles: ");
    return miles * 1.6 ; 
    
}

function convertNoeuds(noeuds){
    noeuds= prompt("Entrez une valeur en noeuds: ");
    return noeuds * 1.852 ;
    
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
    // added start convert in the function so that you have a loop back to the beginning??
    startConvert();

}

//créer un loop

while (startConvert()){
    
    console.log(quelleConvert());
    
}