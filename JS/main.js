// let ,const

const first = 1;
// console.log(first);

//String, Number, Boolean, null, undefined

const name = "ajay";
const age = 30;
const rating =4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z);

//Concatenation

console.log('my name is ' + name + ' and my ' + age);
//another way
console.log(`my name is ${name} and my ${age}`);
//also can assign to a variable
const hello = `my name is ${name} and my age ${age}`;
console.log(hello);

//to get length
console.log(hello.length);
console.log(hello.toUpperCase());
console.log(hello.split(''));
const s = 'techno, computer, it';
console.log(s.split(', ')); // we can use this method to save the data to the database from the user input and from other stuff

//Arrays : variables that hold multiple values

const fruits = ['apple','oranges', 1, true];
fruits[4] = 'grapes';
fruits.push('fruits');    //push method
fruits.unshift('first'); // adds element to first
fruits.pop(); // to take the last one
const numbers = new Array(1, 2, 3, 4);
console.log(fruits);
console.log(Array.isArray(fruits)); 
console.log(fruits[1]);
console.log(fruits.indexOf('oranges'));
console.log(numbers);

const person = 
{
    firstname : 'ajayy',
    age : 21,
    hobbies: ['music', 'movies', 'sports'],
}

console.log(person.firstname, person.age);
console.log(person.hobbies[1]);

//pulling out of this
const {firstname, hobbies} = person;
console.log(hobbies[2]);

//adding stuff
person.email = 'ajay@gmail.com';
console.log(person);

//Arrays of todos

const todos =
[
    {
    id : 1,
    text: 'take that out',
    isCompleted: true
    },
    {
    id : 2,
    text: 'meeting with boss',
    isCompleted: false
    },
    {
    id : 3,
    text: 'take that out',
    isCompleted: true
    }
]
console.log(todos[1].text);


//to convert into json
const todojson = JSON.stringify(todos);
console.log(todojson);

//for

for(let i=0;i<5;i++){
    console.log(`for loop iteration number ${i}`);
}

//while
let i =0;
while(i<5){
    console.log(`while loop number: ${i}`);
    i++;
}

//