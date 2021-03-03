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



var _ = require('lodash')

let list = [{"a": 12},{"a": 1}]
let a = _.filter(list, {'a':1})
console.log(a);

a = _.find(list, {"a": 12})
console.log(a);


let app = [
    {year:2020, quarter:4},
    {year:2010, quarter:4},
    {year:2010, quarter:2},
    {year:2019, quarter:1},
]
// points.sort(function(a, b){return b - a});
app.sort((a, b)=> {
    if (a.year === b.year) {
                if (a.quarter > b.quarter) {
                    return 1;
                } else if (a.quarter < b.quarter ) {
                    return - 1;
                } else {
                    return 0;
                }
            } else {
                if (a.year > b.year ) {
                    return 1;
                } else {
                    return - 1;
                }
            }
})
console.log(app);


function solveN(N){
    const dec2bin = (dec)=>{
        let result = (dec >>> 0).toString(2) + '';
        if (result.length % 2 === 1) result = '0' + result;
        return result;
    }
    let binNum = dec2bin(N);
    let newBin = ''
    for(let i = 0; i < binNum.length; i = i + 2){
        newBin = newBin + '' + binNum[i + 1] + '' + binNum[i]
    }
    newBin = parseInt(newBin, 2);

    return newBin
}

solveN(24)
console.log(solveN(23))