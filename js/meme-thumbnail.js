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
        liNode.innerHTML=e.id+':'+e.name;
        ulNode.appendChild(liNode); 
    }); 
    nodeToFill.querySelector('ul').remove();
    nodeToFill.appendChild(ulNode);
}
loadGlobalesMemes(fillMemeThumbnail);