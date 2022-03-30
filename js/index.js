
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
    var svgTextNode =document.querySelector('svg>text');
    //modif du contenu html de la balise, ici c'est le texte de l'image
    svgTextNode.innerHTML = meme.text;

    //attention si pas de return ça renvoi undefine dans console
    //unMemeGlobal.text='toto'
    //setMemeOnSVGViewer(unMemeGlobal) => renvoir undefined

    //x avce decomposition
    var attrib = svgTextNode.attributes['x'];
    attrib.value =  meme.x;

    //y sans decomposation
    svgTextNode.attributes['y'].value =  meme.y;


    svgTextNode.attributes['font-size'].value =  meme.fontSize;
    svgTextNode.style.fontWeight =  meme.fontWeight;

    svgTextNode.attributes['fill'].value = meme.color;

    svgTextNode.style.fontStyle = (meme.italic ? 'italic':'normal');

    svgTextNode.style.textDecoration = (meme.underline ? 'underline':'none');

}
