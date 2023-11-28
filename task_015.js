//Find the number of positive divisors of a given number.

let number = 1034;

for (let index = 1; index <= number; index++) {    
    if(number % index == 0) console.log(index);
}

