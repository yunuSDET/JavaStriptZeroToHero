//Find the sum of the all integers of an array
let arr = [1,2,3,4,5,6,7,8,9];


//First solution
let sum1 = 0;
for (let each of arr) sum1 +=each;
console.log(sum1);



//Second solution
let sum2 = 0;
arr.forEach(each => sum2 += each);
console.log(sum2);



//Third solution
let sum3 = arr.reduce((acc,each) => acc + each,0);
console.log(sum3);