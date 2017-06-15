var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
var hour = date.getHours();
var min = date.getMinutes();
var time = year +'/' +month+'/' +day+'/' +hour+'/' +min+ '/'+date.getSeconds();
console.log(time);

console.log(new Date());