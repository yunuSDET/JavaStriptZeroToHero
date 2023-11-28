//Find the sum of digits of a given four-digit number.

let number = 1564;

let sum = 0;

while(number>0){
    sum+=number % 10;
    number=Math.floor(number/10);
}

console.log(sum);