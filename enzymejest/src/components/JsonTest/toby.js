let data = require('./data.json');
data = data['DATA']

let res = []
let checkSame = {}

for(let item of data){
    if(!checkSame[item.name]){checkSame[item.name] = item.mark}
    else{
        checkSame[item.name] = checkSame[item.name] + item.mark
    }
}
console.log(checkSame);

for(let item in checkSame){
    let tempRes = {"name": item, "total": checkSame[item]}
    res.push(tempRes);
}

console.log(res)