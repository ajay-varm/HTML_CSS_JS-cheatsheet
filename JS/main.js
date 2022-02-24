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
// todos.length ==>> gives the todos array list length
for(let i=0;i<todos.length;i++){
    console.log(todos[i].text);

}
//more best way..
for(let todo of todos){
    console.log(todo);
    console.log(todo.id);
}

//while
let i =0;
while(i<5){
    console.log(`while loop number: ${i}`);
    i++;
}

// forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.text);
});

const todotext =  todos.map(function(todo){
    return todo.text;
});
console.log(todotext);

const todocompleted =  todos.filter(function(todo){
    return todo.isCompleted == true;
});
console.log(todocompleted);

const todocompleteds =  todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
});
console.log(todocompleteds);

// if statements

const p = 10;

if(p == 10){
    console.log('x is 10');
}

const pl = '10';

if(pl === '10'){
    console.log('pl is 10');
}

const color = p > 10 ? 'red' : 'blue';
console.log(color);

//switches

 switch(color){
    case 'red':
        console.log('its red');
        break;
    case 'blue':
        console.log('its blue');
        break;
    default:
        console.log('not correct');
 }


//functions

function addNums(num1, num2){
    console.log(num1 + num2);
}

addNums(5,4); // if you give "addNums() ==> output will be NaN 'means not a number'"

// we can also set default values to our functions 

function addNums(num1 = 1, num2 = 1){
    console.log(num1 + num2);
}
addNums();

//alternative for the above thing


const addNumss = (num1 = 1, num2 = 1) => {
    console.log(num1 + num2);
}
addNumss();

//simpler way

const numm = num1 => num1 + 5;

console.log(numm());

//OOPS

//construction func
function Person(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstname} ${this.lastname}`;
    }
}
// instantiate object
const person1 = new Person('john', 'deo', '4-3-1980');
console.log(person1);

console.log(person1.getBirthYear());
console.log(person1.getFullName());

