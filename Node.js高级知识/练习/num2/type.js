function type(par){
    let type = typeof (par);
    switch (type){
        case 'number':
        console.log(isNaN(par) ? 'NaN' : type);
        break;
        case 'object':
        if(par === null){
            console.log(null);
        }else if(par instanceof Array){
            console.log('array');
        }else{
            console.log(type);
        }
        break;
        default:
        console.log(type);
    }
}

type('123');