
def convert_pieds() :
    pieds = input("Entrez une valeur: ")
    result = int(pieds) / 3.28
    return int(result)

def convert_miles():
    miles =input ("Entrez une valeur: ")
    result = int(miles) * 1.6
    return int(result)

def convert_noeuds():
    noeuds = input ("Entrez une valeur: ")
    result = int(noeuds) *1.852
    return int(result)

# fonction pour démarrer/ arrêter
def start_convert():
    start = input("Voulez-vous convertir une valeur? ")
    if start == "oui":
        return True
    else:
        return False

# fonction pour choisir quelle conversion
def quelle_conv():
    choix_user = input("Quelle conversion souhaitez vous faire? pieds en mètres(p/m), miles en km (m/km), noeuds en kmh (n/kmh)")
    message = "le résultat est: "

    if choix_user == "p/m":
        print(message + str(convert_pieds()))

    elif choix_user == "m/km":
        print(message + str(convert_miles()))

    elif choix_user == "n/kmh":
        print(message + str(convert_noeuds()))

    else:
        print("nous ne pouvons pas faire cette conversion")
    
#créer le loop

while start_convert():
    quelle_conv()

print("Merci d'avoir utilisé nos services")




