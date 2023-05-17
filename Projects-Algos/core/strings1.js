//< Remove Blanks
//< Create a function that, given a string, returns all of that string’s contents, but without blanks. 

//* Examples:

//* removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
//* removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
function removeBlanks(string){
    let newString = ""
    for(i=0; i<string.length; i++)
        if (string[i] != " "){
            newString = newString + string[i]
        }
        return newString
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))


//< Get Digits
//< Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

//* Examples:

//* getDigits("abc8c0d1ngd0j0!8") => 801008

//* getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(string){
    num = ""
    for(i=0; i<string.length; i++){
        if(!isNaN(string[i])){
            num = num + string[i];
        }
    }
    return Number(num)
}
console.log(getDigits("abc8c0d1ngd0j0!8"))
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))


//< Acronyms
//< Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

//* acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

//* acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(string){
    let split=string.split(" ")
    let acro = ""
    for(i=0; i<split.length; i++){
        // console.log(split)
        if(split[i] != ""){
        acro = acro + split[i][0];
    }
}
return acro.toUpperCase();
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "))
console.log(acronym("Live from New York, it's Saturday Night!"))


//< Count Non-Spaces
//< Create a function that, given a string, returns the number of non-space characters found in the string. 

//* Examples:

//* countNonSpaces("Honey pie, you are driving me crazy") => 29
//* countNonSpaces("Hello world !") => 11

function countNonSpaces(string){
    let count = 0;
    for(i=0; i<string.length; i++){
        if(string[i] != " "){
            count += 1;
        }
    }
    return count;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"))
console.log(countNonSpaces("Hello world !"))



//< Remove Shorter Strings
//< Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

//* Examples:

//* removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
//* removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(arr, val){
    newArr = []
    for(i=0; i<arr.length; i++){
        if(arr[i].length >= val){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))