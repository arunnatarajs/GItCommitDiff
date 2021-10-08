function printing(n,data,res){
    if(n==1){
        // res.write(JSON.stringify(data));
        res.write("<div align='right'> <h3>" + 
        "Commited by : " + JSON.stringify(data.commit.committer.name) + "</h3> <br> <h3>" 
        +"Commited on : " + JSON.stringify(data.commit.committer.date) + "</h3> <br> <h3>"
        +"parent : " + JSON.stringify(data.parents[0].sha) + "</h3> </div>");

    }

   if(n==2){
        res.write(`<h5>hello</h5>`);
    }

    res.end();
}

module.exports = {printing};