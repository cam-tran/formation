 /**
     * Fonction generique pour appel XHR
     * @param {string} ressourceUrl commence par /
     * @param {Function} successCallback conction de traitement du resultat success 
     * @param {string} method method HTTP pour l'appel  def. GET
     * @param {number} id surcharge de l'id de la ressource pour la creation de l'url 
     * @param {(object|Array|string|number} body contenu objet, array, number, ou string du contenu (les object/array serons traités par JSON.stringify) 
     * @param {string} contentType contenu du header Content-Type
     * @param {Function} unsuccessCallback fonction de traitement du resultat non valid unsuccess 
     * 
     */
function CRUD(RestAdr){
    this.callXHR = function(ressourceUrl,succesCallback,method,id,body,contentType,unsuccesCallback){
        if(undefined === ressourceUrl){
            console.log('%c%s', 'color:red;font-weight:900;font-size:20pt','callXHR resoource not given !!! ');
            return;
        }
        if(undefined===method){method='GET'};

        //instancviation d'un objet XMLHttpRequest
        var xhr = new XMLHttpRequest();

        //prepa ouverture
        var fullUrl = RestAdr+ressourceUrl
        if(undefined !==id){fullUrl='/'+id};

        xhr.open(method,fullUrl);

        //facultatif entetes (uniquement si fourni)
        if(undefined !== contentType) {xhr.setRequestHeader("Content-Type",contentType);}
       

        //gestion de event
        xhr.onreadystatechange = function(evt){
            if(xhr.readyState < XMLHttpRequest.DONE){return};

            if(xhr.status >= 400){
                if(undefined !== unsuccesCallback && typeof(unsuccesCallback) ==='function'){
                    unsuccesCallback(xhr);
                }
                return};

            //exec de la fonction sucess
            if(undefined !== succesCallback && typeof(succesCallback) ==='function'){
                succesCallback(xhr.response);
            }
            console.log(xhr.response);
            console.log(evt);
        }

        //envoi request
        if(typeof(body) === 'object'){
            body = JSON.stringify(body);
        }
        xhr.send(body);
        console.log('SENT ' + method + '' + fullUrl);
    }

}

var xhr = new CRUD('http://localhost:5679');
xhr.callXHR('/images',function(){});  //GET par defaut

//xhr.callXHR('/images',function(){},'POST', undefined,{ch1:'hello'},'application/json');