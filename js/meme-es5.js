/**
 * constructeur d'un objet meme
 */
function Meme(){
    // champs public sur l'instance de this
    
    this.id = undefined;
    this.name="Le nom";
    this.texte="text";
    this.x=0;
    this.y=0;
    this.fontSize=12;
    this.fontWeight ='900';
    this.underline=false;
    this.italic=false;
    this.color='#000000';
    this.image ='image1.jpg';
    console.log('for meme construite',this);

    this.setDummyValues = function createDummyMeme(params){
        this.name="Dummy demo meme";
        this.texte="mon texte";
        this.x=30;
        this.y=50;
        this.fontSize=20;
        this.fontWeight ='900';
        this.underline=true;
        this.italic=false;
        this.color='#ACACAC';
        this.image ='image1.jpg';
    }
}

//object dont la forme ne peut pas changer
var unMemeGlobal= Object.seal(new Meme());
unMemeGlobal.setDummyValues();

