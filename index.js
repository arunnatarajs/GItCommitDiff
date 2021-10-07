var express = require('express');
var { diff } = require('./commitDiff');
var { fetchingData } = require('./fetching');

var app = express();

var owner,repository,oid,url;

app.get('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   return res.redirect('/repositories/owner/repository/commits/oid');
})

app.get('/repositories/owner/repository/commits/oid', function(req,res){

  res.write (`<p><h3>Enter proper Owner, Repository , Oid.</h3><br><br> 1. To get repositories alone : http://localhost:8081/repositories/owner<br>
  example : http://localhost:8081/repositories/arunnatarajs<br><br> 2. To get all commits of particular repository :
  http://localhost:8081/repositories/owner/repository<br>example : http://localhost:8081/repositories/arunnatarajs/toDoApp/commits<br><br>
  3. To get particular commit of particular repostitory : http://localhost:8081/repositories/owner/repository/commits/oid<br>
  example : http://localhost:8081/repositories/arunnatarajs/toDoApp/commits/01484c7931c70226b09d9474a805ee7cfb71af79<br><br>
  4. To find difference between two commits : http://localhost:8081/repositories/owner/repository/commits/oid/diff<br> 
  example : http://localhost:8081/repositories/arunnatarajs/toDoApp/commits/01484c7931c70226b09d9474a805ee7cfb71af79/diff </p> `);
   
  res.end();
})

// To get repositories alone

//  app.get('/repositories/:owner', function(req,res){
  
//   owner = req.params.owner;

//   url = `https://api.github.com/users/${owner}/repos`;

//   console.log("To get repositories alone");
  
//   fetchingData(res,url);
//  })

// To get commits of particular repository

//  app.get('/repositories/:owner/:repository/commits', function(req,res){
  
//   owner = req.params.owner;
//   repository = req.params.repository;

//   url = `https://api.github.com/repos/${owner}/${repository}/commits`;

//   console.log("To get commits of particular repository");
  
//   fetchingData(res,url);
  
//  })

 // To get particular commit

app.get('/repositories/:owner/:repository/commits/:oid', (req, res) => {
  
  owner = req.params.owner;
  repository = req.params.repository;
  oid = req.params.oid;

  url=`https://api.github.com/repos/${owner}/${repository}/commits/${oid}`;

  console.log("To get particular commit");

  fetchingData(res,url,1);
})

// To get difference between two commits.

app.get('/repositories/:owner/:repository/commits/:oid/diff',(req,res) => {
  
  owner = req.params.owner;
  repository = req.params.repository;
  oid = req.params.oid;

  url=`https://api.github.com/repos/${owner}/${repository}/commits/${oid}`;

  console.log("To get difference between two commits.");

  diff(res,owner,repository,oid,url,2);


})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})