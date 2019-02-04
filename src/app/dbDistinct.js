var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var jsonfile = require('jsonfile');

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test2");
    var query;

    //query = [{"properties.PARCELLOC": { $in: s1 } }]
    //query = {"properties.PAR_ZIP": "44145" },{ _id:0};
    //query = {$where: 'this.properties.PAR_ZIP.length < 6' }, {"properties.PAR_ZIP":1};
    //query = {$where: 'this.properties.PAR_ZIP.length < 6' };
    //query = {"id": 10 };
    //query = ("properties.PAR_ZIP", {"id" : {$gt:1}});
    //query = ("properties.MAIL_CITY");
    //query = "properties.MAIL_CITY", {"properties.MAIL_STATE":"OH"};
    /*
    dbo.collection("test1").find(query).toArray(function (err, result) {
        console.log(result);
    });
    */
    /*
    dbo.collection("test1").distinct("properties.PAR_ZIP", function (err, result) {
        //console.log(result);
        
        jsonfile.writeFile('distinctValues.json', result, {spaces:2}, function(err){
            console.log(err);
            //db.close();
        });
    });*/
    
    //dbo.collection("test1").distinct(query, function (err, result) {
    //dbo.collection("test1").distinct("properties.MAIL_CITY", {"properties.MAIL_STATE":"OH"}, function (err, result) {
    dbo.collection("test1").distinct("properties.MAIL_CITY", {"properties.MAIL_STATE":"OH"}, function (err, result) {   
    //dbo.collection("test1").distinct("properties.MAIL_CITY", {"properties.MAIL_STATE":"OH"}, function (err, result) {    
        //console.log(result);
        
        jsonfile.writeFile('distinctValues2.json', result, {spaces:2}, function(err){
            console.log(err);
            //db.close();
        });
        
        

    });
    
    

    
    
});

console.log("hello db");