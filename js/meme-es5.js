/**
 * constructeur d'un objet meme
 */
function Meme(){
    // champs public sur l'instance de this
    this.name="Le nom";
    this.texte="le text";
    // fonction privé local a l'objet
    function _unePrivateFn() {
        console.log('hello');
    }
    // champs privé local(interne) à l'objet
    var _unePrivateVar="private value"
    //exposition public d'un fonction
    this.maPublicFn=_unePrivateFn;
    //fonction public
    this.fn=function (uneValue) {
        //acces au parametre d'entrée de la fonction fn
        console.log(uneValue);
        // acces au champs public de l'instance
        console.log(this.name);
        // acces a la fonction public de l'instance
        this.maPublicFn();
        // acces au champs privé de l'instance
        console.log(_unePrivateVar);
        // execution d'une fonction privé de l'instance
        _unePrivateFn();
    }
}
var unMemeGlobal=new Meme();