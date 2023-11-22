//Find the average of an integer array;
let arr = [1,2,3,4,5,6,7,8,9,12,114,41];

//First solution
let sum = 0;
for (let each of arr) {
    sum += each;
}
console.log(sum/arr.length);


//Second solution
let sum2 = 0;
arr.forEach(i=> sum2 += i);
console.log(sum2/arr.length);


