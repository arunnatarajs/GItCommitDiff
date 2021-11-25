function printing(n,data,res){
    // res.write(JSON.stringify(data));
    res.send(data);
    res.end();
}

module.exports = {printing};