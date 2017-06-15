/*
    fileSystem
*/ 
'use strict';

const fs = require('fs');
// fs.mkdir('./temp', (err) => {
//     console.log(err);
// });
fs.rename('./temp','./temp11',(err)=>{
    console.log(err);
})