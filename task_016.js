//Find if the given number is prime or not.

let number = 103141;

let isPrime = true;

for (let index = 2; index <=Math.sqrt(number) ; index++) 
    if(number % index == 0) isPrime = false;
    
console.log(isPrime ? number + " is a prime number." : number + " is not a prime number.");