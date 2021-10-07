const { printing } = require('./dataPrinting');

function fetchingData(res,url,n){

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();


xhr.open('GET', url, true);

xhr.onload = function () {
    //res.write("hello");
    var data = JSON.parse(this.response)
    printing(n,data,res);
    res.end();
}
xhr.send();

}

module.exports={fetchingData}; 

