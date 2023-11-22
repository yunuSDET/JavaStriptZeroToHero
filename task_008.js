//Calculate the factorial of numbers in this range (1-10)


function factorial(number){
    if (number==0) return 1;
    let retult = 1;

    for (let index = 1; index <= number; index++) {
        retult *=index;
    }
    return retult;
}


for (let index = 1; index <= 10; index++)  console.log(factorial(index));

