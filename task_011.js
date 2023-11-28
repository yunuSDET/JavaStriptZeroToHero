//Print the sum of numbers between 1 and 100 that are divisible by 5


let sum = 0;



//First solution
for (let index = 1; index <= 100; index++) {
       if(index % 5 == 0)  sum += index;
}
console.log(sum);


//Second solution
let numbers = Array.from(Array(100).keys());
sum = numbers.map(i=>i+1).filter(i=>i % 5 == 0).reduce((a,b)=> a+b,0);
console.log(sum);









