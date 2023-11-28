//Find the number of positive divisors of a given number.

let number = 1034;
let divisors = [];
for (let index = 1; index <= number; index++) {    
    if(number % index == 0) divisors.push(index);
}
console.log(divisors);

