//Find the sum of numbers between 34 and 1000 that are divisible by 5 but not by 3.

let sum;


//First solution
sum = 0
for (let index = 34; index <= 1000; index++) {   
    
     if(index % 5 == 0 && index % 3 != 0) sum +=index;
}
console.log(sum);



//Second solution
sum = 0
for (let index = 34; index <= 1000; index++) {      
    sum += (index % 5 == 0 && index % 3 != 0) ? index: 0;
}
console.log(sum);