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
function startConvert(start) {
    var start = prompt("Voulez-vous convertir une valeur? Oui/Non");
    return start;
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

}

//créer un loop
while (start == "Oui"){
    
    


start == "Non";
}