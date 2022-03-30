/**
 * constructeur d'un objet meme
 */
function Meme(){
    // champs public sur l'instance de this
    this.name="Le nom";
    this.texte="le text";
    this.x=0;
    this.y=0;
    this.fontSize=12;
    this.fontWeight ='900';
    this.underline=false;
    this.italic=false;
    this.color='#000000';
    this.image ='image1.jpg';
    console.log(this);
}

//object dont la forme ne peut pas changer
var unMemeGlobal= Object.seal(new Meme());