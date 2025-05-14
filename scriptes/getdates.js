// Fonction pour obtenir l'année en cours
function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
}

// Fonction pour ajouter l'année en cours au pied de page
function setCurrentYear() {
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = getCurrentYear();
    }
}

// Fonction pour ajouter la date de dernière modification au pied de page
function setLastModified() {
    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Dernière modification: ${document.lastModified}`;
    }
}

// Exécuter les fonctions lorsque le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    setCurrentYear();
    setLastModified();
});