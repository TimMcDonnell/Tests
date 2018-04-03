// alert("this is a alert");

/*
Long comment on different lines

*/

var message ='tim is a genious';

var one = 1;
console.log (typeof one);
console.log('%c Oh my heavens!', 'background: #222; color: #bada55');


var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// var Mob = {
// height: 24,
// weight: 32,
// info: "crazy mother",
// 'my fave things': 'movies'
// }

// console.log(Mob.height, Mob.weight, Mob['my fave things']);

// var colors = ['red', 'green', 25];
// console.log(Array.isArray(colors));

// var colors = ['red', 'Green', 'Blue'];
// colors.push('black');
// var totalColors = colors.slice(1, 3);
// colors.forEach(function(item, index, array){
// console.log(item, index, array);

// });

// console.log(colors);
// console.log(totalColors);

//Regular Expressions
var re = /hello/;
var sentence = ' the start of the world is with an hello world';

console.log (re.test(sentence));

// Functions

function total(num1, num2){

return num1 + num2;

}
// console.log(total);

// console.log('%c Here is the result', total, 'background: #222; color: #bada55');

// function sum(num1,num2){

//     return num1 + num2;
// }

// function callingSum(num1, num2){
//     return sum.apply(this, arguments)


// }

// console.log(callingSum(11,3));

var string = 'This is a long string';

console.log(string.toUpperCase());

console.log(`Hello I am ${message}`);

console.warn('Oh Noze!');
console.error('Shit!');
console.info('Information message');
console.assert(1 === 2); //will only alert if the enclosed os wrong

//console.clear();



































