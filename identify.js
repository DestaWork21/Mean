let x = [1, 2, 3];
if(x.constructor === Array){
    console.log('Yes x is an array!');
}else{
    console.log('No x is not an array!');
};
//note we don't have to repeat our self the best option is looping 
//types of for loop for is one when you know the value initializer i=0; i<7 our condition, i++ increament conslole {} is the body 
for(let i = 0; i < 7; i++){
    console.log('hello');
};

let total = 0;
for(let i = 10; i > 0; i--){
    total = total + i;
}
console.log(total);

//while loop 
let num = 1;
while (num < 6){
    console.log("I'm counting! The number is " + num);
    num = num + 1;
}
console.log("We are done. Goodbye world!");


// let num = 6;
// do {
//     console.log("I'm counting! The number is " + num);
//     num = num + 1;
// }
// while (num < 6);
// console.log("We are done. Goodbye world!");

let colors = ['blue', 'green', 'red', 'chartreuse'];
// a simple array of strings
for(let i = 0; i < colors.length; i++){
// by using the length of our colors array, we can make the condition 
// of our for loop match the number of elements in the array!
    console.log(colors[i]);
    // now we can use i to log the elements of the color array individually
};

//break prints only the item before it  
// let names = ['Anna', 'Oscar', 'Kadie', 'Steve', 'Elle', 'Boris', 'Lord Humongous'];
// for(let i = 0; i < names.length; i++){
//     if(names[i] === 'Kadie'){
//         console.log('Kadie is in our array!');
//         break;
//     }
// }
// console.log('We finished looping!');

//continue only skeep when equale 
let names = ['Anna', 'Oscar', 'Kadie', 'Steve', 'Elle', 'Boris', 'Lord Humongous'];
for(let i = 0; i < names.length; i++){
    if(names[i] === 'Steve'){ continue };
    console.log(names[i]);
};

//invoking

function sayName(name){
    console.log("Hello my name is " + name);
};
sayName('Morty');

// function sayName(name){
//     console.log("Hello my name is " + name);
// };
// let x = sayName('Morty');
// console.log(x);


function sayNamePreminum(first_name, last_name){
    console.log("Hello my name is " + first_name + " " + last_name);
};
sayNamePreminum("Stewart", "Dent");
sayNamePreminum("Rocky", "Balboa");


function ten(){
    return 10;
};
let twenty = ten() + ten();
console.log(twenty);
console.log("******************************************");
function sayName1(name){
    console.log("Hello my name is " + name);
};
// -- anonymous function, stored in a variable --
let sayName2 = function(name){
    console.log("Hello my name is " + name);
};
// -- standalone function, stored in a variable --
let sayName3 = function sayName3(name){
    console.log("Hello my name is " + name);
};

(function(){
    console.log("Hello world!");
})();

let sayName4 = (name) => { console.log("Hello my name is " + name) };
sayName4("Dolores");
