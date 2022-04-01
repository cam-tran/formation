/**
 * fonction d'activation du js
 */
 function lorsDuChargementDeLaPage() {
    //selection de la balise a manipuler
    var baliseJsLoaded = document.querySelector("#isJsLoaded");
    //edition dui contenu de la balise contenu dans la avriable
    baliseJsLoaded.innerHTML = "JS loaded";
    baliseJsLoaded.className = "isLoaded";
    console.log('Le js est chargé', baliseJsLoaded);
    //initForm();
}
document.addEventListener('DOMContentLoaded', lorsDuChargementDeLaPage);
