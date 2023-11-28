//How many three-digit numbers are divisible by 7 and 2 but not by 3?

let count = 0;

for (let index =100; index <=999; index++) {
    if ((index % 7 == 0) && (index % 2 == 0) && (index % 3 != 0)) count++;
}

console.log(count);