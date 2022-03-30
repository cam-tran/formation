
/**
 * 
 */
function lorsDuChargementDeLaPage(){
    var baliseisJsLoaded = document.querySelector("#isJsLoaded");
    console.log('JS est chargé', baliseisJsLoaded );
    baliseisJsLoaded.innerHTML = 'JS chargé';
    baliseisJsLoaded.className='isLoaded';
    initFormEvents();
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


function initFormEvents(){

    document.forms["meme-form"]["meme-name"]
    .addEventListener('input', function(evt){
        unMemeGlobal.name = evt.target.value;
        setMemeOnSVGViewer(unMemeGlobal);
    })

    document.forms["meme-form"]["meme-text"]
   // .addEventListener('change', function(evt){
    .addEventListener('input', function(evt){
        unMemeGlobal.text = evt.target.value;
        setMemeOnSVGViewer(unMemeGlobal);
    })

    document.forms["meme-form"]["meme-x"]
    .addEventListener('input',function(evt){
        unMemeGlobal.x = evt.target.value;
        setMemeOnSVGViewer(unMemeGlobal);
    
    })

    document.forms["meme-form"]["meme-y"]
    .addEventListener('input',function(evt){
        unMemeGlobal.y = evt.target.value;
        setMemeOnSVGViewer(unMemeGlobal);
    
    })


    document.forms["meme-form"]["meme-fontSize"]
    .addEventListener('input',function(evt){
        unMemeGlobal.fontSize = evt.target.value;
        setMemeOnSVGViewer(unMemeGlobal);
    
    })

    document.forms["meme-form"]["meme-fontWeight"]
    .addEventListener('input',function(evt){
        unMemeGlobal.fontWeight = evt.target.value;
        setMemeOnSVGViewer(unMemeGlobal);
    
    })


    //texte dans l'image souligné
    document.forms["meme-form"]["meme-underline"]
    .addEventListener('input',function(evt){
        unMemeGlobal.underline = evt.target.checked;
        setMemeOnSVGViewer(unMemeGlobal);
    
    })

    document.forms["meme-form"]["meme-italic"]
    .addEventListener('input',function(evt){
        unMemeGlobal.italic = evt.target.checked;
        setMemeOnSVGViewer(unMemeGlobal);
    
    })

    document.forms["meme-form"]["meme-color"]
    .addEventListener('input',function(evt){
        unMemeGlobal.color = evt.target.value;
        setMemeOnSVGViewer(unMemeGlobal);
    
    })



}


