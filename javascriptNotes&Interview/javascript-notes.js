//1/ what is variable?
/*
    variable এমন একটা জিনিস যেখানে আমি আমার একটি তথ্যকে স্টোর করে রাখতে পারবো এবং প্রয়োজন অনুযায়ি ব্যবহার করতে পারবো , আপডেট করতে পারবো ও পরিবর্তন করতে পারবো ।   
*/   
var name = 'palash';


//2/ what is js reserued keywords?
/*
    js reserued keywords হচ্ছে js এর নিজস্ব কিছু সংরক্ষিত keywords ।
    boolean, case, else, do, const, true, false, for, in, var, with, typeof, delete Etc.
*/ 


//3/ typeof দিয়ে কি বুঝায় ?
/*
    typeof দিয়ে বুঝায় এটা কোন টাইপের variable । 
*/
var nam = 'palash';
console.log(typeof nam);



//4/ parseInt() কি কাজে লাগে ?
// or. js এ string type var কে কিভাবে number type var করবো ?
/*
    js এ string type var কে number type var করতে হলে আমাকে parseInt() use করতে হবে ।
*/
var price = '54';
var priceNum = parseInt(price); // দশমিক থাকলেও আসবে না। 
console.log(priceNum);



//5/ parseFloat() কি কাজে লাগে ?
/*
    যদি দশমিক সহ string type var কে number typr var করতে চাই তাহলে আমাকে parseFloat() use করতে হবে  ।
*/
var price = '54.522655';
var priceNum = parseFloat(price);
console.log(priceNum);



//6/ otFixed() কি কাজ করে ?
//or. দশমিকের পরে কিভাবে ১ বা ২ সংখ্যা করবো ?
/*
    যদি দশমিকের পরে অনেক গুলা সংখ্যা থাকে কিন্তু আমি চাই দশমিকের পরে শুধু ২টা সংখ্যা থাকবে তাহলে আমাকে otFixed() use করতে হবে ।
*/
var price = 56.862451;
var priceFixed = price.toFixed(2);
console.log(priceFixed);

var price = '56.862451';
var priceFixed = parseFloat(price).toFixed(2);
console.log(parseFloat(priceFixed) + 2510);



//7/ array কি এবং কেন use করবো ?
/*
    এরে এক ধরনের ভেরিএবল। এরে শব্দের অর্থ হচ্ছে সারি। সাধারণ ভেরিয়েবলে আমরা একটি ভেরিয়েবলে একটি মাত্র মান বা ডাটা রাখতে পারতাম। কিন্তু  এরে ভেরিয়েবলে আমরা একাধিক মান রাখতে পারি। তবে এরে এর দুইটি মান বা আইটেম এর মাঝে কমা দিয়ে সেপারেট করতে হয়।এরে এর মান বা আইটেমগুলো থার্ড ব্রেকেটে অনেকে বক্স ব্রেকেট বলে এর ভিতরে লিখতে হয়। 

    variable এর মান হিসেবে আমি যদি একাদিক জিনিস রাখতে চাই তাহলে আমকে array use করতে হবে ।
*/
var ages = [56, 58, 45, 68, 24];



//8/ length কি কাজ করে ?
//or কোনো একটা array এর মধ্যে কয়টা elements বা সংখ্যা আছে কিভাবে জানবো ?
/*  
    কোনো একটা array এর মধ্যে কয়টা elements বা সংখ্যা আছে সেটা আমাকে জানতে হলে length use করতে হবে ।
*/
var ages = [56, 58, 45, 68, 24];
console.log(ages.length);



//9/ indexOf() কি কাজ করে ?
//or কোনো array এর মধ্যে কিছু elements বা সংখ্যা আছে কিন্তু আমি জানতে চাই বিশেষ একটা elements বা সংখ্যা কত তম পজিশনে আছে । 
/* 
    সেটা জানতে হলে আমকে indexOf() use করতে হবে।
    অথবা indexOf() দিয়ে ckack করে 45 arry এর মধ্যে আছে কিনা।

    বি.দ্র. আমরা যদি ইনডেক্সঅফ এ প্রথম ব্রেকেটের ভিতরে এমন কোন ভেলু দেই যা আমাদের এরে এর মধ্যে নাই তাহলে আমাদেরকে (-1) মাইনাস ওয়ান রিটার্ন করবে। 
*/
var ages = [56, 58, 45, 68, 24];
console.log(ages.indexOf(45)); // indexOf() সব সময় ০ দিয়ে শুরু হয় ।


//10/ push() কি কাজ করে ?
//or array এর শেষে কিভাবে নতুন elements add করবো ?
/*
    array এর শেষে নতুন elements add করার জন্য আমাকে push() use করতে হবে ।
*/
var ages = [56, 58, 45, 68, 24];
ages.push(55);
console.log(ages);

var friends = ['fahad', 'panto', 'joy', 'selim'];
friends.push('avi');
console.log(friends);


//11/ pop() কি কাজ করে ?
//or array এর শেষে কিভাবে elements remove করবো ?
/*
    array এর শেষে elements remove করার জন্য আমাকে pop() use করতে হবে ।
*/
var ages = [56, 58, 45, 68, 24];
ages.pop();
console.log(ages);

var friends = ['fahad', 'panto', 'joy', 'selim', 'avi'];
friends.pop();
console.log(friends);



//12/ unshift() কি কাজ করে ?
//or array এর প্রথমে কিভাবে নতুন elements add করবো ?
/*
    array এর প্রথমে নতুন elements add করার জন্য আমাকে unshift() use করতে হবে ।
*/
var ages = [56, 58, 45, 68, 24];
ages.unshift(88);
console.log(ages);

var friends = ['fahad', 'panto', 'joy', 'selim'];
friends.unshift('avi');
console.log(friends);



//13/ shift() কি কাজ করে ?
//or array এর প্রথমে কিভাবে নতুন elements remove করবো ?
/*
    array এর প্রথমে নতুন elements remove করার জন্য আমাকে shift() use করতে হবে ।
*/
var ages = [56, 58, 45, 68, 24];
ages.shift();
console.log(ages);

var friends = ['avi', 'fahad', 'panto', 'joy', 'selim'];
friends.shift();
console.log(friends);



// 6 থেকে 5 ছোট/কম কিনা? দেখার জন্য
console.log(6 > 5);

// 6 থেকে 5 বড়/বেশি কিনা? দেখার জন্য
console.log(6 < 5);

// 6 থেকে 5 ছোট/কম এবং সমান কিনা? দেখার জন্য
console.log(6 >= 5);

// 6 থেকে 5 বড়/বেশি এবং সমান কিনা? দেখার জন্য
console.log(6 <= 5);

// 6 আর 6 সমান কিনা? দেখার জন্য
console.log(6 == 6);

// 5 আর 6 আলাদা কিনা? দেখার জন্য
console.log(5 != 6);



//14/ if else কিভাবে লিখতে হয় ? 
/*
    if (সত্য হইলে) {
        এখানে যা আছে তা দেখানো হবে 
    } else {  ---------------- আর মিথ্যা হইলে 
        এখানে যা আছে তা দেখানো হবে  
    }
*/
var chickenPrice = 200;
var myMoney = 1000;

if (chickenPrice < myMoney) {
    console.log('Bro, give me rice with chicken');
} else {
    console.log('Bro, give me rice with pulses');
}



//15/ if, else if কিভাবে লিখতে হয় ?
/*
    if (সত্য কিছু হইলে) {
	           এখানে যা আছে তা দেখানো হবে 
	}
	else if (নইলে যদি আমি সত্য হই  ) {
	           এখানে যা আছে তা দেখানো হবে 
	}
	else if (নইলে যদি আমি সত্য হই  ) {
	           এখানে যা আছে তা দেখানো হবে 
	}
	else {  ---------------- আর মিথ্যা হইলে 
	         এখানে যা আছে তা দেখানো হবে  
	}
*/

var oppoPhone = 44000;
var relmePhone =35000;
var narzoPhone = 26500;
var myMoney = 30000;

if (oppoPhone < myMoney) {
    console.log('Bro, give me oppo phone');
} else if (relmePhone < myMoney) {
    console.log('Bro, give me relme phone');
} else if (narzoPhone < myMoney) {
    console.log('Bro, give me narzo phone');
} else {
    console.log('Thanks');
};

// কিছুটা এই ভাবে যদি আমরা ধরি, যদি আমার danish কিনার টাকা থাকে তাহলে আমি danish খাবো কিন্তু  danish এ যদি মাছি থাকে তাহলে আমি খাবো না । 

var danishPrice = 60 ;
var butterPrice = 30 ;
var toastPrice = 15 ;
var myBudget = 0 ;
var machiJodiTakhe = true ;

if (danishPrice < myBudget) {
    if ( machiJodiTakhe == true) {
        console.log('danish khabo');
    } else {
        console.log('danish khabo na');
    }
} else if (butterPrice < myBudget) {
    console.log('bro, butter dao');
} else if (toastPrice< myBudget) {
    console.log('bro, tahole toast dao')
} else {
    console.log('ok bro, kichu e lagbe na');
}



//16/ while loop কি এবং কিভাবে লিখতে হয় ?

/*
    var roastGiven = 0;	---- রোস্ট কাউকে দেয় নাই  
    
    while (roastGiven < 5) {	---- রোস্ট ৫ জনকে দেয়া হবে      [লুপটা চলবে যতকন পর্যন্ত ৫ না হয় ]
        console.log('roast den dada');	---- প্রতিবার কি প্রিন্ট হবে 
        roastGiven++; অথবা roastGiven = roastGiven + 1;	----(এটা যদি আমি না দেই তাহলে ৫ জনের থেকে বেশি প্রিন্ট হবে মানে হাজার হাজার হয়ে যাবে ) [এটার কাজ হচ্ছে প্রতিবার ১ করে যোগ হবে মানে ৫ বারে ৫ যোগ হবে  ] 
        console.log(roastGiven); ---- এটার কাজ হচ্ছে প্রতিবার যে সংখ্যা যোগ হবে সে গুলাকে প্রিন্ট করা 
    }
*/

var roastGiven = 0;
while (roastGiven < 5) {
    console.log('den vai khai');
    roastGiven++;
    console.log(roastGiven);
}

var num = 1;
while (num <= 10) {
    console.log('number - ', num);
    num++;
}

//odd number
var num = 1;
while (num <= 20) {
    console.log('odd number - ', num);
    num = num + 2;
}

//even number
var num = 0;
while (num <= 20) {
    console.log('even number - ', num);
    num = num + 2;
}



//17/ for loop কি এবং কিভাবে লিখতে হয় ?

/*
    আমরা যদি roastGiven এর দিকে লক্ষ্য করি ।
    1. roastGiven = 1 	---- রোস্ট কাউকে দেয় নাই  / মানে এক থেকে দেয়া শুরু হবে 
    2. roastGiven <= 5 	---- রোস্ট ৫ জনকে দেয়া হবে      [লুপটা চলবে যতকন পর্যন্ত ৫ না হয় ]
    3. roastGiven++ 	----(এটা যদি আমি না দেই তাহলে ৫ জনের থেকে বেশি প্রিন্ট হবে মানে হাজার হাজার হয়ে যাবে ) [এটার কাজ হচ্ছে প্রতিবার ১ করে 			যোগ হবে মানে ৫ বারে ৫ যোগ হবে  ] 
*/ 

for (var roastGiven = 1; roastGiven <= 10; roastGiven++) {
    console.log('bro, roast dao - ',roastGiven);
}

for (var i = 0; i <= 10; i++) {
    console.log('number - ',i);
}



//17/ for of loop কি এবং কিভাবে লিখতে হয় ?
var ages = [56, 58, 45, 68, 24, 5];
for (const element of ages){
    console.log(element);
}



//18/ array loop কি এবং কিভাবে লিখতে হয় ?

var ages = [56, 58, 45, 68, 24, 5];
for (var i = 0; i < ages.length; i++) {
    var element = ages[i]
    console.log(element);
}

var friends = ['avi', 'fahad', 'panto', 'joy', 'selim'];
for (var i = 0; i < friends.length; i++) {
    var element = friends[i];
    console.log(element);
}



//19/ function কি এবং কিভাবে লিখতে হয় ?

function startFan() {
    console.log('walk towards the switch');
    console.log('press the switch');
}
startFan();


function bringSingara(taka) {
    console.log('12 ta singara er price = ',taka,'/-');
}
bringSingara(60);


function chickenSingara(taka) {
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 180;
var totalSingara = chickenSingara(money);
console.log(totalSingara);


// multiple - parameter function
function addTowNum(num1, num2) {
    var result = num1 + num2;
    return result;
}
var total = addTowNum(52, 54);
console.log(total);


//20/ multiple objects কি এবং কিভাবে লিখতে হয় ?

var mobile = {
    title : 'this is smart phone',
    name : 'relme narzo 20',
    color : 'blue',
    price : 13500
};
mobile.price = 15500;
mobile['title'] = 'this is a realme smart phome'
console.log(mobile);



//21/ switch কি এবং কিভাবে লিখতে হয় ?

var color = 'black';

switch (color) {
    case 'blue':
        console.log('color is blue');
        break;      //এই break  দিতে হবে , না দিলে কাজ করবে না 
    case 'green':
        console.log('color is green');
        break;
    case 'red':
    case 'black':   //আমি ইচ্ছা করলে ২ টা case দিতে পারি । ২টার মধ্যে একটি থাকলেই কাজ করবে 
        console.log('color is red or black');
        break;
    default:
        console.log('color is yellow');
}


//22/ break কি এবং কিভাবে লিখতে হয় ?

// Example 1
var i = 0;

while (i <= 10) {
    console.log(i);
    if (i == 5) {
        break;  //উপরে আমি বলছি ১০ পর্যন্ত যাওয়ার জন্য কিন্তু এখন আমার ১০ যাওয়ার দরকার নাই ৫ পর্যন্ত গেলেই হবে তখন আমি break দিবো কারন break দিলে ৫ পর্যন্ত গিয়ে আর যাবে না । 
    }
    i++;
}

// Example 2
for (var i = 0; i < 15; i++) {
    console.log(i);
    if (i == 6) {
        break;
    }
}

// Example 3
var numbers = [15, 25, 26, 58, 754, 55, 858, 100];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 80 ) {
        break;
    }
    console.log(number);
}

// Example 4
const products1 = [
    { name: 'books', price: 15900 },
    { name: 'nokia phone', price: 4500 },
    { name: 'sumsang phone', price: 8000 },
    { name: 'dell laptop', price: 48000 },
    { name: 'delax mouse', price: 8000 },
    { name: 'narzo phone', price: 13500 },
    { name: 'volta gel', price: 8000 }
];
for (const product of products1) {
    if (product.price < 10000) {
        break;
    }
    console.log(product);
}



//23/ continue কি এবং কিভাবে লিখতে হয় ?

// Example 1
var numbers = [15, 25, 26, 58, 754, 55, 858, 100];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        continue;
    }
    console.log(number);
}

// Example 2
const products2 = [
    { name: 'books', price: 15900 },
    { name: 'nokia phone', price: 4500 },
    { name: 'sumsang phone', price: 8000 },
    { name: 'dell laptop', price: 48000 },
    { name: 'delax mouse', price: 8000 },
    { name: 'narzo phone', price: 13500 },
    { name: 'volta gel', price: 8000 }
];
for (const product of products2) {
    if (product.price < 10000) {
        continue;
    }
    console.log(product);
}



//24/ modolas কি এবং কিভাবে লিখতে হয় ?

// modolas দিয়ে Even/জোর বের করার নিয়ম 
function isEven(num){
    if(num % 2 == 0){
        return true;
    }
    return false;
}
const num = 44;
const evenNum = isEven(num);
console.log(evenNum);



//25/ leap year কি এবং কিভাবে লিখতে হয় ?

function checkLeapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return true;
    }
    return false;       
}
const year = 1800;
const leapYear = checkLeapYear(year);
console.log(leapYear);



//25/ factoial  কি এবং কিভাবে লিখতে হয় ?

// normal factoial
let factoial = 1;
for(let i = 1; i <= 7; i++){
    factoial = factoial * i;
}
console.log(factoial);

// function factoial
function getFactoial(num){
    let factoial = 1;
    for(let i = 1; i <= num; i++){
        factoial = factoial * i;
    }
    return factoial;
}
let fact = getFactoial(7);
console.log(fact);

// recursive factoial ( advanced )  function
function m(n) {
    if (n == 1) {
        return 1;
    }
    return n * m(n-1);
}
console.log(m(5));


// উপরের recursive factoial বুঝার জন্য 
//1/ return 5 * m(5-1);-- 4 -- //1/  5*1= 5
//2/ return 4 * m(4-1);-- 3 -- //2/  4*2= 20
//3/ return 3 * m(3-1);-- 2 -- //3/  3*20= 60
//4/ return 2 * m(2-1);-- 1 -- //4/  2*60= 120

// 5! = 5 x 4 x 3 x 2 x 1 = 120
// 4*5=20*3=60*2=120*1=120



//26/ Math.abs() কি এবং কিভাবে লিখতে হয় ?
/*
    Math.abs() সব সময় তোমাকে positive দিবে মানে positive হলেও positive দিবে আর negative হলেও positive দিবে । 
*/
const myNumber = -8;
const output = Math.abs(myNumber);
console.log(output);



//27/ Math.ceil() কি এবং কিভাবে লিখতে হয় ?
/*
    Math.ceil() হচ্ছে সব সময় উপরের দিখে যাবে মানে যদি 35.596 থাকে তাহলে এটা 36 হবে 
*/
const myNumber2 = 58.0001;
const output2 = Math.ceil(myNumber2);
console.log(output2);



//28/ Math.floor() কি এবং কিভাবে লিখতে হয় ?
/*
    Math.floor() হচ্ছে সব সময় নিচের দিখে যাবে মানে যদি 35.596 থাকে তাহলে এটা 35 হবে 
*/
const myNumber3 = 35.0001;
const output3 = Math.floor(myNumber3);
console.log(output3);



//29/ Math.round() কি এবং কিভাবে লিখতে হয় ?
/*
    Math.round() হচ্ছে সব সময় তোমাকে নিকটতম দিখে নিয়ে যাবে যেমন 21.9999 তাকলে তোমাকে 22 দিবে আবার 21.2225 তাকলে 21 দিবে 
*/
const myNumber4 = 21.18;
const output4 = Math.round(myNumber4);
console.log(output4);



//29/ Math.random() কি এবং কিভাবে লিখতে হয় ?
/*
    Math.random() হচ্ছে একেক সময় একেক সংখ্যা তোমাকে দিবে  
*/

const output5 = Math.random();
console.log(output5);

// Example 2
function randomNum(num){
    const selected = [];
    for (let i = 0; i < 5; i++) {

        const random = Math.random() * num;
        const roundRandom = Math.round(random);

        // selected এর মধ্যে roundRandom যদি না থেকে তাহলে push করবো।
        if(selected.indexOf(roundRandom) == -1){ 
            selected.push(roundRandom);
        } 
        else{
            console.log('out number ',roundRandom); // যে নাম্বার গুলা ২ বার আসছে সে গুলা দেখার জন্য।
        } 
    };
    return selected;
};
const result = randomNum(50);
console.log(result);



//30/ swap
var first = 5;
var second = 7;
console.log(first, second);

var temp = first;
first = second;
second = temp;
console.log(first, second);

//or
[first, second] = [second, first];
console.log(first, second);



//31/ max
// কে কার থেকে বড় জানার জন্য 

// Example 1
function max(business,minister,arrmy){
    if (business > minister && business > arrmy) {
        return business;
    }
    else if (minister > business && minister > arrmy) {
        return minister;
    }
    else {
        return arrmy;
    }
};
console.log(max(450,350,550));

// Example 2
const business = 450;
const minister = 350;
const arrmy = 550;
const result2 = Math.max(business,minister,arrmy);
console.log(result2);



//32/ sum
// যোগফল বের করার জন্য 

function arrSum(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        sum += num;
    }
    return sum;
};
const nums = [14, 25, 85, 59, 05, 45, 78];
console.log(arrSum(nums));



//33/ largest number
// অনেক গুলা সংখ্যার মধ্যে সব থেকে বড় সংখ্যা কোনটি 

function largestNum(num){
    let largest = num[0];
    for(let i = 0; i < num.length; i++){
        const element = num[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const num = [12, 54, 2, 34, 75, 32, 12];
console.log(largestNum(num));

// অনেক গুলা মাইনাস সংখ্যার মধ্যে সব থেকে বড় সংখ্যা কোনটি  
function largestElement(num) {
    let largest = num[0];
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element > largest) {
            largest = element;
        }       
    }
    return largest;
}
const ages = [-12, -6, -17];
const oldest = largestElement(ages);
console.log(oldest);



//34/ fibonacci 
// ith = (i-1)th + (i-2)th এই সূত্র দিয়ে এটার কাজ করা হবে 

function fibonacci(num) {
    if (typeof num != 'number'){
        return 'plese give a number'
    }
    else if (num < 2) {
        return 'plese give a positive number'
    }
    const fibo = [0,1];
    for(let i = 2; i < num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboNum = fibonacci(15);
console.log(fiboNum);

// আরো নতুন ভাবে 
function fibonacci(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    const fibo = fibonacci(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}
const fiboElement = fibonacci(10);
console.log(fiboElement);



//35/ একটা নাম যদি ২ বার কিন্তু আমি চাই একটা নাম একবারই থাকবে 

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'dabul', 'gabul','abul', 'habul', 'dabul'];
function removeDuplicate(names) {
    const unique = [];
    for (const element of names){
        if(unique.indexOf(element) == -1){
            unique.push(element)
        }
    }
    return unique;
}
console.log(removeDuplicate(names));



//36/ string কে কিভাবে আমি উল্টো করে লিখবো ??

const string = 'Hello Bangladesh';
let newString = '';
for(const letter of string){
    newString = newString + letter;
}
console.log(newString);



//37/ নিজে কোনো এরের length বের করা 
const nums1 = [14, 25, -5, 85, 5, 59, 2, 45, 9, 78];
let length = 0;
for(let i = 0; nums1[i]; i++){
    length += 1;
}
console.log(length);



//38/ i কে যদি ৩ দিয়ে ভাগ যায় তাহলে foo লিখবা আর i কে যদি ৫ দিয়ে ভাগ যায় তাহলে bar লিখবা এবং i কে যদি ৩ ও ৫ দিয়ে ভাগ যায় তাহলে foobar লিখবা
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
    }
    else if (i % 3 == 0) {
        console.log('foo');
    }
    else if (i % 5 == 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }
    
}



//39/ সব থেকে কম দামি ফোন কোনটা 
const phones = [
    {name: 'realme', price: 17000, camera: 64, storage: 128},
    {name: 'xaomi', price: 29000, camera: 64, storage: 128},
    {name: 'narzo', price: 13500, camera: 48, storage: 64},
    {name: 'redmi', price: 21990, camera: 50, storage: 128}
];
let lowestPhone = phones[0];
for (const phone of phones){
    if (phone.price < lowestPhone.price) {
        lowestPhone = phone;
    }
}
console.log(lowestPhone);



//40/ আমার টোটাল কত টাকা খরচ হইছে
// e-commerce site er hisab
const cart = [
    {name: 'laptop', price: 48000, quantity: 1},
    {name: 'shirt', price: 450, quantity: 5},
    {name: 't-shirt', price: 250, quantity: 8},
    {name: 'phone', price: 101990, quantity: 2}
];
let cartTotal = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);



//41/ আমি চাই প্রথম ১০ মাইল ১০ টা করে animals দেখা যাবে আর পরের ১০ মাইল ৫০ টা করে animals দেখা যাবে এবং শেষের মাইল গুলোতে ১০০ টা করে animals দেখা যাবে । 
function animal(mail){
    const animalsDensity1 = 10;
    const animalsDensity2 = 50;
    const animalsDensity3 = 100;

    if (mail < 10) {
        const totalAnimals1 = mail * animalsDensity1;
        return totalAnimals1;
    }
    else if (mail < 20) {
        const animals10 = 10 * animalsDensity1;
        const restAnimals1 = mail - 10;
        const restAnimalsTotal1 = restAnimals1 * animalsDensity2;
        const totalAnimals2 = animals10 + restAnimalsTotal1;
        return totalAnimals2;
    }
    else {
        const animals10 = 10 * animalsDensity1;
        const animals20 = 10 * animalsDensity2;
        const restAnimals2 = mail - 20;
        const restAnimalsTotal2 = restAnimals2 * animalsDensity3;
        const totalAnimals3 = animals10 + animals20 + restAnimalsTotal2;
        return totalAnimals3;
    }
}
console.log(animal(25));



//42/ এই for loop দিয়ে যে কাজ করা হইছে নিছে function দিয়ে same কাজ করা হইছে 
// for loop 
let sum = 0;
for (let j = 6; j >= 1; j--) {
    sum = sum + j;
}
console.log('for loop sum :', sum);

    // function 
function x(i){
    if (i == 1) {
        return 1;
    }
    return i + x(i-1);
}
console.log('function sum :' ,x(6));



//43/ কোনো একটা জিনিস কিভাবে search দিয়ে বের করবো
const products = [
    { name: 'nokia phone', price: 4500 },
    { name: 'dell laptop', price: 48000 },
    { name: 'narzo phone', price: 13500 },
    { name: 'sumsang phone', price: 8000 },
    { name: 'delax mouse', price: 8000 },
    { name: 'volta gel', price: 8000 }
];
function searchProducts(products, searchText){
    let matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText.toLowerCase()) != -1) {
            matched.push(product);
        }
    }
    return matched;
}
console.log(searchProducts(products, 'Phone'));