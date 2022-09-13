// Prime Problem and  [ will intentionally write the incorrect code ]

let num = 13;
let count = 0;
for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
        count++;
    }
    if (count == 2) {
        console.log("yes")
    }
    else {
        console.log("no")
    }
}
//Palindrome problem

let str = "naman";
let str2 = "";
for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
} if (str2 == str) {
    console.log("yes")
} else {
    console.log("no")
}