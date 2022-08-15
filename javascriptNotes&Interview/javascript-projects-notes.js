// এই for loop দিয়ে যে কাজ করা হইছে নিছে function দিয়ে same কাজ করা হইছে 
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



// inches to feet
// আমার দাদি / দাদা আমাকে বলছে তুই আমাকে inches থেকে feet এ conbert করে দে ।

function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}

var dadiInch = 120;
var totalFeet = inchToFeet(dadiInch);
console.log(totalFeet);

var dadaInch = 140;
var totalFeet = inchToFeet(dadaInch);
console.log(totalFeet);

//2/ miles to kilometers

function mileToKilometer(mile){
    var km = mile * 1.609344;
    return km;
}

var dadiMile = 10;
var totalKilometer = mileToKilometer(dadiMile);
console.log(totalKilometer);



// ৩ টা বই মিলে টোটাল কতো পেইজ হইছে 
function booksPage(bookQ1, bookQ2, bookQ3) {
    const totalBooks = (100 * bookQ1) + (200 * bookQ2) + (300 * bookQ3);
    return totalBooks;
}
console.log('Total Books Pages:', booksPage(5, 3, 7));



// exam er mark
function examMark(number){
    if(number >= 80 && number <= 100){
        return 'A+';
    }
    else if(number >= 70 && number < 80){
        return 'A';
    }
    else if(number >= 60 && number < 70){
        return 'A-';
    }
    else if(number >= 50 && number < 60){
        return 'B';
    }
    else if(number >= 40 && number < 50){
        return 'C';
    }
    else if(number >= 30 && number < 40){
        return 'D'
    }
    else{
        return 'F'
    }
}
const myNumber = examMark(44);
console.log(myNumber);


// লটারির মতো যদি ১০০ এর মধ্যে ৫ টা নাম্বারকে বিজয়ী করতে চাই ।
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



// যোগফল বের করার জন্য 
const nums = [14, 25, 85, 59, 05, 45, 78];
function arrSum(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        sum += num;
    }
    return sum;
};
console.log(arrSum(nums));



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



// একটা নাম যদি ২ বার কিন্তু আমি চাই একটা নাম একবারই থাকবে 
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



// string কে কিভাবে আমি উল্টো করে লিখবো ??
const string = 'Hello Bangladesh';
let newString = '';
for(const letter of string){
    newString = newString + letter;
}
console.log(newString);



// নিজে কোনো এরের length বের করা 
const nums1 = [14, 25, -5, 85, 5, 59, 2, 45, 9, 78];
let length = 0;
for(let i = 0; nums1[i]; i++){
    length += 1;
}
console.log(length);



// i কে যদি ৩ দিয়ে ভাগ যায় তাহলে foo লিখবা আর i কে যদি ৫ দিয়ে ভাগ যায় তাহলে bar লিখবা এবং i কে যদি ৩ ও ৫ দিয়ে ভাগ যায় তাহলে foobar লিখবা
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



// সব থেকে কম দামি ফোন কোনটা 
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



// আমার টোটাল কত টাকা খরচ হইছে
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



// আমি চাই প্রথম ১০ মাইল ১০ টা করে animals দেখা যাবে আর পরের ১০ মাইল ৫০ টা করে animals দেখা যাবে এবং শেষের মাইল গুলোতে ১০০ টা করে animals দেখা যাবে । 
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



// কোনো একটা জিনিস কিভাবে search দিয়ে বের করবো
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



// break এবং continue দিয়ে আমরা ১০০০০ টাকার উপরের product গুলা নিবো 
// break
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

// continue
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