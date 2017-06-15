//connect(url,options,callback);

let MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://127.0.0.1:27017/gaojuan';

MongoClient.connect(url,(err, db)=>{
    if(err){
        console.log('err',err);
        return false;
    }

    //console.log(db);
    let dbAdmin =db.admin();
    dbAdmin.listDatabases((err, dbs)=>{
        console.log(dbs);
    });


})