//Find the sum of the odd numbers from 50,304
let sum = 0;

for (let index = 50; index <= 304; index++) {
  if(index % 2 == 1) sum +=index;
}
console.log(sum);