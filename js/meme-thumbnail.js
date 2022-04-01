/**
 * fonction de remplissage du thumbnail
 * @param {Array<Meme>} memes 
 */
 function fillMemeThumbnail(memes,nodeToFill) {
    if(undefined===nodeToFill){
        nodeToFill=document.querySelector('#meme-thumbnail');
    }
  
    var ulNode=document.createElement('ul');
    memes.forEach(function (e,i) {
        var liNode=document.createElement('li');
        //liNode.innerHTML=e.id+':'+e.name;

        var aNode = document.createElement('a');
        aNode.href="#";
        aNode.innerHTML = e.id+':'+e.name;
        aNode.addEventListener('click', function(evt){
            evt.preventDefault();  //car où href=# il ne fait rien
            
            //surcharge de l'url sans reload de page
            history.pushState('','','/edit/memes/'+1);

            unMemeGlobal =e;
            setFormValuesFromMeme(unMemeGlobal);
            setMemeOnSVGViewer(unMemeGlobal);
        })
        liNode.appendChild(aNode);
        ulNode.appendChild(liNode); 
    }); 
    nodeToFill.querySelector('ul').remove();
    nodeToFill.appendChild(ulNode);
}
loadGlobalesMemes(fillMemeThumbnail);