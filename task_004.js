//Check if given string variable starts with "a" and has less than five characters (output must be true or false)


let str = "all";




//First solution
console.log(str.startsWith("a") && str.length<5);



//Second solution
let checkStr1 = (text) => text.startsWith("a") && text.length<5;
console.log(checkStr1(str));




//Third solution
function checkStr2(text){
        return text.startsWith("a") && text.length<5;
}
console.log(checkStr2(str));



