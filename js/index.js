
/**
 * 
 */
function lorsDuChargementDeLaPage(){
    var baliseisJsLoaded = document.querySelector("#isJsLoaded");
    console.log('JS est chargé', baliseisJsLoaded );
    baliseisJsLoaded.innerHTML = 'JS chargé';
    baliseisJsLoaded.className='isLoaded';
    initForm(); //addEventListener
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

    //gestion affiche image
    var img = listeGlobalImages.find(function(elem){
        return meme.imageId ===  elem.id;
    })
    
    if(undefined !== img){
        var svgNode = document.querySelector('svg');
        svgNode.setAttribute('viewBox','0 0 '+img.w+' '+ img.h);
        var svgImg = svgNode.querySelector('image');
        svgImg.setAttribute('xlink:href','/img/'+img.href);
    }else{
        var svgNode = document.querySelector('svg');
        svgNode.setAttribute('viewBox','0 0 500 500');
        var svgImg = svgNode.querySelector('image');
        svgImg.setAttribute('xlink:href','');
    }

    
}

/**
 * addEventListener
 */
function initForm(){

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

    document.forms["meme-form"]["meme-image"]
    .addEventListener('change', function(evt){
        unMemeGlobal.imageId = parseInt(evt.target.value);
        setMemeOnSVGViewer(unMemeGlobal);
    })

    document.forms["meme-form"].addEventListener('submit',function(evt){
        evt.preventDefault();
        (new CRUD('http://localhost:5679')).post('/memes',function(response){
                alert('c\'est enregistrer ...bonne soiree a demain')
        },unMemeGlobal,'application/json');
    })

    setFormValuesFromMeme(unMemeGlobal);

    //index.js faiat appel à loadGlobalesImages de meme-es5.js et passe la fonction callback ici est loadSelectWithImages
    //permettant de remplir la liste images dans le DOM
    //c'est à dire une fois que le chargement d'images 
    loadGlobalesImages(loadSelectWithImages);

}

 //function setFormValuesFromMeme recupère les valeurs de back-end et mette dans Viewver
 function setFormValuesFromMeme(meme){
     if(undefined===meme ){return}

        var form = document.forms["meme-form"];
        form["meme-name"].value = meme.name;
        form["meme-text"].value =  meme.text;
        form["meme-x"].value = meme.x;
        form["meme-y"].value = meme.y;
        form["meme-fontSize"].value= meme.fontSize;
        form["meme-fontWeight"].value = meme.fontWeight;
        form["meme-underline"].checked= meme.underline;
        form["meme-italic"].checked = meme.italic;
        form["meme-color"].value =  meme.color;
        setMemeOnSVGViewer(meme);  //appelle cette function pour afficher dans la vue

 }


/**
 * 
 * @param {Array} images 
 */
 function loadSelectWithImages(images){
    var select =document.forms["meme-form"]["meme-image"];
    images.forEach(function(unObjetDuTableau,postionDeElement){
       var opt= document.createElement('option');
       opt.value =unObjetDuTableau.id;
       opt.innerHTML= unObjetDuTableau.name;
       select.appendChild(opt);
    })
}
