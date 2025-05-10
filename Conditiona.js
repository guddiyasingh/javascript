console.log("Hello I am conditional tutorial")

let age =5;
let grace =2;

console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age ** grace)
console.log(age /grace)
console.log(age % grace)
console.log(age+grace)

if((age+grace)> 18) {

    console.log("you can drive");
}

else {

    console.log("you cannot drive");
}



a =6;
b= 8;

let c = a > b ? (a - b) : (b-a);

console.log(c)


// Use logical operators to find whether the age of a person lies between 10 and 20 ?

let age1 = 15;

if (age >=10 && age <= 20) {

    console.log("this age is lies between 10 and 20");
}

else {
    console.log("THis age is not lies between 10 and 20")
};


// Demonstrate the use of switch case statments in javascript

//Write a javascript program to find wheter a number is Divisible by 2 and 3


let n1 = prompt("Enter any number");

if(n1%2==0 && n1%3==0){
    console.log("n1 is divisible by 2 and 3")

}
else {
    console.log("n1 not divisible by 2 and 3")
}