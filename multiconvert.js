// écrire les différentes fonctions de conversion

function convertPieds(pieds){
    var pieds= prompt("Entrez une valeur en pieds: ");
    var result = Number(pieds)/ 3.28 ;
    var message = "Le résultat est " + result.toString;
    alert(message);
    
}

function convertMiles(miles){
    var miles= prompt("Entrez une valeur en miles: ");
    var result= Number(miles) * 1.6 ;
    var message = "Le résultat est " + result.toString; 
    alert(message);
    
}

function convertNoeuds(noeuds){
    var noeuds= prompt("Entrez une valeur en noeuds: ");
    var result = Number(noeuds) * 1.852 ;

    var message = "Le résultat est " + result.toString;
    alert(message);

    
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
        alert("Cette conversion est impossible.");
    }
    

    // added start convert in the function so that you have a loop back to the beginning??// maybe why you have to say no twice.
    startConvert();

}

//créer un loop

while (startConvert()){
    
    console.log(quelleConvert());
    
}