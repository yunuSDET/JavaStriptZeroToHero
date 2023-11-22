//Find the largest of number of an array
let arr = [1,1232,3,45,5,6,557,8,12,114,41];


//First solution
let largest = arr[0];
for (let each of arr) {
    if (largest<each) largest = each;
}
console.log(largest);



//Second solution
arr.sort((a,b)=> b-a);
console.log(arr[0]);



//Third solution
console.log(Math.max(...arr));