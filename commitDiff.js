const { fetchingData } = require('./fetching');

function diff(res,owner,repository,oid,url,n){

    var data,parent;

    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', url, true);
    
    xhr.onload = function () {
    
        data = JSON.parse(this.response);
        parent = data["parents"][0]["sha"];
        url = `https://api.github.com/repos/${owner}/${repository}/compare/${parent}...${oid}`;
       
    
        fetchingData(res,url,n);
    }

    xhr.send(data);
}

module.exports={diff}; 

//url = `https://api.github.com/repos/${owner}/${repository}/compare/cc5c4a0172d3b831176d573917e0cc6cbe8042c9...${oid}`;