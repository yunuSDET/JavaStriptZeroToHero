//Convert all upper case letters to lower case and all lower case letters to upper case in the given string "WhAt Is thE mATter?"


let str = "WhAt Is thE mATter?";

let newStr = "";

for (let index = 0; index < str.length; index++) {
    
let eachLetter = str.charAt(index);

newStr+=(eachLetter.toLowerCase()==eachLetter) ? eachLetter.toUpperCase() : eachLetter.toLowerCase();
    
}

console.log(newStr);