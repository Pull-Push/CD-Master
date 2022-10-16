console.clear();
// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.
console.log("Number 1");
for (i=1; i<=20; i+=2){
    console.log(i);
}

// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
console.log("Number 2");
for (i=100; i>0; i--){
    if(i%3==0){
    console.log(i);
    }
}
// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
console.log("Number 3");
for (i=4; i>-4; i-=1.5){
    console.log(i);
}
// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
console.log("Number 4");
var num4 = 0;
for (i=1; i<=100; i++){
    num4 += i;
    console.log(num4);
}
// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
console.log("Number 5");
var num5 = 1;
for (i=1; i<=12; i++){
    num5 *= i;
    console.log(num5);
}