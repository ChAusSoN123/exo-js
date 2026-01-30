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

// Affichage des variables

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

// Gestion de la publicité
const adModal = document.getElementById('ad-modal');
const ignoreBtn = document.getElementById('ignore-btn');

// Sélectionner tous les boutons dans les articles
const articleButtons = document.querySelectorAll('article button');

articleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Afficher le modal
        adModal.style.display = 'flex';
        
        // Masquer le bouton ignorer initialement
        ignoreBtn.style.display = 'none';
        
        // Après 5 secondes, afficher le bouton ignorer
        setTimeout(() => {
            ignoreBtn.style.display = 'block';
        }, 5000);
    });
});

// Fermer le modal en cliquant sur ignorer
ignoreBtn.addEventListener('click', () => {
    adModal.style.display = 'none';
});

// Empêcher la fermeture en cliquant ailleurs (pas de swipe, mais pour desktop, empêcher clic sur overlay)
adModal.addEventListener('click', (e) => {
    if (e.target === adModal) {
        // Ne rien faire, pour empêcher la fermeture avant 5 sec
    }
});

// Gestion du code cadeau
const codeInput = document.getElementById('code-input');
const rewardMessage = document.getElementById('reward-message');
const errorMessage = document.getElementById('error-message');
const submitCodeBtn = document.getElementById('submit-code');

submitCodeBtn.addEventListener('click', () => {
    if (codeInput.value === 'Vive-israel') {
        rewardMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        rewardMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
});

// Fin du script.js