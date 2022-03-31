/**
 * callback est un nom variable pour dire que c'est une fonction callback
 * les derniers variables sont facultatifs
 * @param {*} RestAdr 
 */
function CRUD(RestAdr){
    this.callXHR = function(ressourceUrl,callback,method,id,body,contentType){
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
            if(xhr.status >= 400){return};
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

xhr.callXHR('/images',function(){},'POST', undefined,{ch1:'hello'},'application/json');