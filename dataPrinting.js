function printing(n,data,res){
    if(n==1){
        // res.write(JSON.stringify(data));
        res.write("<div align='right'><h1>"+"Commited by : "+JSON.stringify(data.commit.committer.name)+"</h1><br><h1>" 
        +"Commited on : "+JSON.stringify(data.commit.committer.date)+"</h1></div>");

    }

    else if(n==2){
        res.write("<h1>"+"diff : "+JSON.stringify(data.files)+"</h1>");
    }

    res.end();
}

module.exports = {printing};