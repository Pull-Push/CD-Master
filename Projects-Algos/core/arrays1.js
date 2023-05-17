let arr = [10,4,7,-1,19,100,24,81]

//< Push Front
//*Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

//*Examples:
//* pushFront([5,7,2,3], 8) => [8,5,7,2,3]
//* pushFront([99], 7) => [7,99]

function pushFront(arr, val){
    for(let i = arr.length; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    return arr;
}
console.log(pushFront(arr, 42));


//< Pop Front

//* Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

//* Examples:

//* popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
//* popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

function popFront(arr){
    for(let i = 0; i<arr.length-1; i++){
        arr[i] = arr[i+1];
}
    arr.pop()
    return arr
}
console.log(popFront(arr))

//< Insert At

//* Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

//* Examples:

//* insertAt([100,200,5], 2, 311) => [100,200,311,5]
//* insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(arr, index, val){
    let newArr = []
    for(let i=0; i<index; i++){
        newArr.push(arr[i])
    } 
    newArr.push(val);
    for(let i=index; i<arr.length; i++){
        newArr.push(arr[i])
    }
    return newArr
}
console.log(insertAt(arr, 4, 99))
console.log(insertAt([100,200,5],2,311))
console.log(insertAt([9,33,7], 1, 42))

//todo BONUS Remove At

//todo BONUS Swap Pairs

//todo BONUS Remove Duplicates