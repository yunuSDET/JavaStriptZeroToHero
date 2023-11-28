 //Print the three largest numbers below 5000 that are divisible by 37.

let count = 0;

 for (let index =5000; index > 0; index--) {
 
    if(index % 37 ==0) {
        console.log(index);
        count++;
        if(count==3) break;
    }
    
 }