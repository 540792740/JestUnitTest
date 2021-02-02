// Time complexity is O(n)
// Space complexity is o(1);

const findSecond = (arr)=>{
    let ls = arr.length;

    if(ls < 2) return false;
    let first;
    let second;

    if(arr[0] > arr[1]){
        first = arr[0];
        second = arr[1];
    }
    else{
        first = arr[1];
        second = arr[0];
    }

    for(let i = 2; i < ls; i++){
        if(arr[i] < second) continue
        
        else if(arr[i] >= first) {
            second = first;
            first = arr[i];
        }
        
        else if(arr[i] > second && arr[i] < first) second = arr[[i]]
    }
    return second
}

console.log(findSecond([4,5,7,1, -1, 111]))
console.log(findSecond([4]))
console.log(findSecond([4,2]))
console.log(findSecond([4,4,4,4,4]))