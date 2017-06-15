//connect(url,options,callback);

let MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://127.0.0.1:27017/dingming';

MongoClient.connect(url,(err, db)=>{
    if(err){
        console.log('err',err);
        return false;
    }

    //console.log(db);
    // let dbAdmin =db.admin();
    // dbAdmin.listDatabases((err, dbs)=>{
    //     console.log(dbs);
    // });
    //认证账号密码
    // db.authenticate('test','dm',(err)=>{
    //     if(err){
    //         console.log('auth err',err);
    //     }else{
    //         //进入读取数据去
    //         db.collection('blog').find({}).toArray((err,dbs)=>{
    //             console.log(err,dbs);
    //         });
    //     }
        
    // });


    db.authenticate('dingming',(err)=>{
        db.collection('blag').find({}).toArray((err,dbs)=>{
            console.log(err,dbs);
        })
    })
  


})