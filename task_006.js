//Print the odd numbers from an integer array;
let arr = [1,2,3,4,5,6,7,8,9,12,114,41];


//First solution
for (let each of arr) 
    if(each % 2 == 1) console.log(each);



//Second solution
arr.filter(i =>i % 2 == 1).forEach(i=>console.log(i));



//Third solution
arr.forEach(i=> {if(i % 2 ==1) console.log(i)})