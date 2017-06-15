let mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dingming/test');

let db = mongoose.connection;
db.on('error', (err) => {
    console.log(err);
})
db.on('open', () => {
    console.log('open');
})

let messageSchema = mongoose.Schema({
    name:String,
    age:Number,
    time:{
        type:Date,
        default:Date.now
    },
    connect: String
})

let Message = mongoose.model('Message',messageSchema);

let m1 = new Message({
    name:new Date(),
    age:18,
    connect:'nihaowoshishui'
});

m1.save((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('saved');
    }
})