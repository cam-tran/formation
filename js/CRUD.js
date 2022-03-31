/**
 * callback est un nom variable pour dire que c'est une fonction callback
 * @param {*} RestAdr 
 */
function CRUD(RestAdr){
    this.callXHR = function(ressourceUrl,callback,method,id){
        if(undefined === ressourceUrl){
            console.log('%c%s', 'color:red;font-weight:900;font-size:20pt','callXHR resoource not given !!! ');
            return;
        }
        if(undefined===method){method='GET'};
    }

}

var xhr = new CRUD('http://localhost:5679');
xhr.callXHR('/images',function(){});