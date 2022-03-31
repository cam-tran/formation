/**
 * constructeur d'un objet meme
 */
function Meme(){
    // champs public sur l'instance de this
    
    this.id = undefined;
    this.name="Le nom";
    this.text="text";
    this.x=0;
    this.y=0;
    this.fontSize=12;
    this.fontWeight ='900';
    this.underline=false;
    this.italic=false;
    this.color='#000000';
    this.imageId =undefined;
    console.log('for meme construite',this);

    this.setDummyValues = function createDummyMeme(params){
        this.name="Dummy demo meme";
        this.text="mon texte";
        this.x=30;
        this.y=50;
        this.fontSize=20;
        this.fontWeight ='900';
        this.underline=true;
        this.italic=false;
        this.color='#ACACAC';
        this.imageId =1;
    }
}

//object dont la forme ne peut pas changer
var unMemeGlobal= Object.seal(new Meme());
unMemeGlobal.setDummyValues();

var listeGlobalImages=[];
function loadGlobalesImages(callback){
    var callerHTTP = new CRUD('http://localhost:5679');
    callerHTTP.get('/images', function(response){
        listeGlobalImages= JSON.parse(response);
        callback(listeGlobalImages);
    })
}

