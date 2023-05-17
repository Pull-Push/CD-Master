/*
    given 2 arrays of numbers, return a list of numbers that are present in arr_2, but not in arr_1.

*/

gatherMissingNumbers = (arr_1, arr_2) => {
    var newArr = []
    for(i=0; i < arr_1.length+1; i++){
        for (x=0; x< arr_2; x++){
            if (arr_1[i] === arr_2[x]){
                console.log(newArr.push(arr[x]))
            } 
        }
    }
}

console.log(gatherMissingNumbers([1,2,3], [2,4,6]) === [4,6] ? 'pass' : 'fail'); // has some missing
console.log(gatherMissingNumbers([1,2,3], [1,2,3]) === [] ? 'pass' : 'fail'); // has no missing
console.log(gatherMissingNumbers([1,2,3], [4,5,6]) === [4,5,6] ? 'pass' : 'fail'); // has all missing