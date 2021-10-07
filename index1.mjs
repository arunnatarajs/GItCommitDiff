import { fetch } from 'node-fetch';

function call(){
const response = fetch('https://github.com/');
const body =  response.text();

console.log(body);
}

call();

// function print(){
//     return "hello world";
// }

// module.exports = {print};



// var XMLHttpRequest = require('xhr2');
// var xhr = new XMLHttpRequest();

// const url=`https://api.github.com/repos/arunnatarajs/toDoApp/commits`;
   
// xhr.open('GET', url, true);
    
// xhr.onload = function () {
//     const data = JSON.parse(this.response);
//     console.log(data);
        
//     }
//     xhr.send(); 

