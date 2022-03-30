
/**
 * 
 */
function lorsDuChargementDeLaPage(){
    var baliseisJsLoaded = document.querySelector("#isJsLoaded");
    console.log('JS est chargé', baliseisJsLoaded );
    baliseisJsLoaded.innerHTML = 'JS chargé';
    baliseisJsLoaded.className='isLoaded';
}
//add un ecouteur d'evenement
// losrque DOMContentLoaded est chargé on appelle la fonction lorsDuChargementDeLaPage
document.addEventListener('DOMContentLoaded',lorsDuChargementDeLaPage);

function setMemeOnSVGViewer(meme){
    //verifier le parametre n'est pas undefine
    //return;  pour sortir de function
    if(undefined === meme){ 
        meme= new Meme();
        meme.setDummyValues();
    }
    var svgTextNode =document.querySelector('svg text');
    //modif du contenu html de la balise
    svgTextNode.innerHTML= meme.text;


}
