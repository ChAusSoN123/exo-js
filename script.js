// Déclaration des variables

let nomEquipement = "Switch Cisco 2960"
let nombrePorts = 24;
let estActif = true;
let adresseIP = "192.168.1.254";
let debit = 1000.5; // en Mbps
let nomServeur = "Apache HTTP Server";
let version = 2.4;
let portHTTP = 80;
let portHTTPS = 443;
let sslActif = true;
let memoire = 8.5;
let motDePasse = "Cyber2026!"
let longueur = motDePasse.length
let VitesseMbps = 1000; // en Mbps
let ports = [20, 43, 80, 443, 543, 353, 6539];
let serveurs = ["8.8.8.8", "1.1.1.1", "208.67.222.222", "192.168.1.1", "10.0.0.1"];
let totalServeurs = 0;

const MainTitle = document.getElementById('main-title');
const classe = document.getElementsByClassName('texte');
const tableau = document.querySelectorAll('container');
const titrePrincipal = document.querySelector('ajouter'); 
const btnClick = document.querySelector("#btnClick")
const inputTxT = document.querySelector("#inputTxT")
const resultat = document.querySelector("#resultat")
const titre = document.getElementById('titre');
const zone = document.getElementById('zone');
const btnAjouter = document.querySelector('#add');
const btnSupprimer = document.querySelector('#add');

// Affichage des variables

btnClick.addEventListener('click', () => {
    console.log("Bouton cliqué !")
})

inputTxT.addEventListener('input', (e) => {
    resultat.textContent = e.target.value
})

btnClick.addEventListener('mouseenter', () => {
    btnClick.style.backgroundColor = '#28a745'
})

btnClick.addEventListener('mouseleave', () => {
    btnClick.style.backgroundColor = '#28a74600'
})

  titre.textContent = "Nouveau Titre !"
   zone.innerHTML =
   `
   <ul>
     <li>Élément 1</li>
     <li>Élément 2</li>
     <li>Élément 3</li>
   </ul>
   `

btnAjouter.addEventListener('click', () => {
    const p = document.createElement('p');
    p.textContent = "Paragraphe ajouté";
    zone.appendChild(p);
})

btnSupprimer.addEventListener('click', () => {
    const paragraphes = zone.querySelectorAll('p')
    if (paragraphes.length > 0) {
        paragraphes[paragraphes.length - 1].remove();
    }
})

console.log("Nom de l'équipement : " + nomEquipement);
console.log("Nombre de port : " + nombrePorts);
console.log("est actif : " + estActif);
console.log("Adresse IP : " + adresseIP);
console.log("Débits : " + debit);
console.log("Nom du serveur : " + nomServeur);
console.log("Version : " + version);
console.log("port HTTP : " + portHTTP);
console.log("port HTTPS : " + portHTTPS);
console.log("ssl Actif : " + sslActif);
console.log("Mémoire : " + memoire);

// Évaluation de la sécurité du mot de passe

if (longueur < 6) {
    console.log("Sécurité : FAIBLE");
} else if (longueur < 10) {
    console.log("Sécurité : MOYENNE");
} else if (longueur > 10) {
    console.log("Sécurité : FORTE");
} else if (longueur >= 12) {
    console.log("Mot de passe très sécurisé");
}

// Évaluation de la vitesse de connexion

if (VitesseMbps < 10) {
    console.log("Connexion LENTE - Verrifiez les cables");
} else if (VitesseMbps < 100) {
    console.log("Connexion CORRECTE - Débit standard");
} else if (VitesseMbps < 1000) {
    console.log("Connexion RAPIDE - Bon débit");
} else if (VitesseMbps >= 1000) {
    console.log("Connexion TRES RAPIDE - Fibre optique");
}
if (VitesseMbps === 0) {
    console.log("ERREUR : Aucune connexion detectée");
}   

// Affichage des ports disponibles

for (let i = 0; i < ports.length; i++) {
    console.log("Port disponible : " + ports[i]);
}

// Simulation de ping vers les serveurs

for (let i = 0; i < serveurs.length; i++) {
    console.log("Ping vers " + serveurs[i]);
    console.log("Temps de réponse : " + i * 15 + "ms");
    totalServeurs++;
    console.log("Total serveurs : " + totalServeurs);
} 

console.log(MainTitle);
console.log(classe);
console.log(tableau);




// Fin du script.js