// 1. JavaScript কি ?
/*
    JavaScript হলো একটি scripting অথবা programming language যা সাধারনত কোন ওয়েবসাইটে ব্যবহার করা হয়। এই language কে আবার client-side scripting language ও বলা হয় কারণ এর সোর্স কোড গুলো process হয় Client এর web browser দিয়ে।

    [ source: https://amarcourse.com/what-is-javascript-in-bangla/ ]
*/

// 2. JavaScript এর সুবিধা ?
/* 
    JavaScript ব্যবহার করার কিছু সুবধিা রয়েছে। যেমন-
    ১। server এর সাথে আপনার Web Application এর যোগাযোগ টা কম হয় – মানে JavaScript এর মাধ্যমে আপনি কোন একটি ফর্মের ডাটাকে server এর নিকট পাঠানোর আগে validate করতে পারবেন যে এই ফর্মের সকল ডাটাকে কি পূরণ হয়েছে কি না। এতে করে আপনার server এর traffic টি কমে যাবে মানে server এর সাথে যোগাযোগটি কম হবে।
    ২। আপনি সাথে সাথেই কোন একটি মেসেজ ইউজারকে দেখাতে পারবেন। মানে ইউজার যদি ওয়বেসাইটে কোন কিছু পূরণ করতে ভুলে যায় আপনি সাথে সাথেই একটি মেসেজ দেখাতে পারবেন। সম্পূর্ণ পেজটি লোড হওয়ার জন্য আপনাকে অপেক্ষা করতে হবে না।
    ৩। JavaScript এর মাধ্যমে আপনি বিভিন্ন রকম interfaces তৈরী করতে পারবেন যেগুলো বিভিন্ন প্রকার JavaScript Event এ কাজ করবে।
    ৪। drag-and-drop components অথবা বিভিন্ন রকম slider ও আপনি এই JavaScript দিয়ে তৈরী করতে পারবেন।
    ৫। JavaScript এর মাধ্যমে আপনি HTML Document এর Content কে পরিবর্তন করতে পারবেন।
    ৬। JavaScript এর মাধ্যমে আপনি HTML Attribute এর Value পরিবর্তন করতে পারবেন।
    ৭। আমরা CSS দিয়ে যে design করে থাকি তা আপনি JavaScript দিয়ে পরিবর্তন করতে পারবেন।
    ৮। কোন HTML Elements কে সহজেই দেখাতে বা অদৃশ্য করতে পারবেন।
    ৯। কোন একটি remote server এ request পাঠাতে পারবেন, কোন ফাইল download বা upload করতে পারবেন (AJAX এর মাধ্যমে)।
    ১০।  এবং আরো অনেক সুবধিা তো রয়েছেই…

    [ source: https://amarcourse.com/what-is-javascript-in-bangla/ ]
*/

// 3. JavaScript এর কিছু বাধ্যবাধকতা
/* 
    প্রত্যেকটি Programing Language এর মতো JavaScript এরও কিছু বাধ্যবাধকতা আছে মানে JavaScript দিয়ে কি করতে পারবেন না। চলুন কয়েকটি জেনে আসি-
    ১। আপনি JavaScript এর মাধ্যমে কোন ফাইল পড়তে এবং লিখতে পারবেন না। security এর জন্য এই feature টি নেই।
    ২। কোন নেটওয়ার্ক সম্পর্কিত Application এর জন্য JavaScript ব্যবহার করতে পারবেন না।
    ৩। JavaScript এ কোন Multi-threading বা Multiprocessor capability feature টি নেই।
    
    [ source: https://amarcourse.com/what-is-javascript-in-bangla/ ]
*/

// 4. JavaScript Engine
/* 
    বর্তমানে JavaScript শুধুমাত্র browser এ execute করতে পারে তা কিন্তু না বরং কোন server বা অন্য কোন device এও execute হতে পারে মানে চলতে পারে। আর সে জন্য শুধু একটি JavaScript Engine লাগবে।
    Web Browser এ আগে থেকেই JavaScript Engine থাকে যাকে আবার JavaScript virtual machine ও বলা হয়ে থাকে। এই সব JavaScript Engine এর আবার বিভিন্ন Web Browser এ বিভিন্ন নাম রয়েছে। যেমন-
    ১। V8 ( Chrome এবং Opera ব্রাউজারের জন্য )।
    ২। SpiderMonkey ( Firefox ব্রাউজারের জন্য )।
    ৩। Trident এবং Chakra ( IE ব্রাউজারের জন্য ), ChakraCore ( Microsoft Edge ব্রাউজারের জন্য)।
    ৪। Nitro এবং SquirrelFish ( Safari ব্রাউজারের জন্য )।
    
    [ source: https://amarcourse.com/what-is-javascript-in-bangla/ ]
*/

// 5. JavaScript Engine কিভাবে কাজ করে?
/* 
    JavaScript Engine কিভাবে কাজ করে তা বলতে গেলে অনেক কিছু বলা লাগবে তবে সাধারন ভাবে বলা যায় এভাবে –
    ১। JavaScript Engine প্রথমে আপনার JavaScript Code পড়বে মানে parse করবে।
    ২। তারপর আপনার JavaScript Code কে পরিবর্তন করে মানে compile করে একটি machine language এ নিয়ে আসবে।
    ৩। তারপর এই machine language টিই আপনার কাজ করবে।
    
    [ source: https://amarcourse.com/what-is-javascript-in-bangla/ ]
*/

// 6. JavaScript ডম(DOM) কি ?
/* 
    ডম(DOM) বা অন্যকথায় ডকুমেন্ট অবজেক্ট মডেল(Document Object Model) হচ্ছে XML বা HTML ডকুমেন্ট এর জন্যে একটা প্রোগ্রামিং ইন্টারফেস। এখান এটা কি? এটা হচ্ছে আমাদের পেজ(HTML বা XML পেজ) কে এমনভাবে রিপ্রেজেন্ট করে যাতে এটাকে সহজেই প্রোগ্রামিং ল্যাংগুয়েজ দিয়ে মডিফাই করা যায়।

    [ source: https://zonayed.js.org/dom/post-0 ]
*/

// 7. JavaScript event bubble কি ?
/* 
    অনেক গুলা parent এবং child এর মধ্যে যদি event hendler গুলা add করা হয় তাহলে আস্তে আস্তে প্রথমে cepcher করবে তারপর সব চেয়ে lowes element এর event টা কে trecker করবে তারপর আস্তে আস্তে উপরের event গুলাকে trecker করা শুরু করবে ।

    আমি যখন অনেক গুলা parent এবং child এর মধ্যে যদি event hendler গুলা add করো তাহলে আস্তে আস্তে প্রথমে cepcher করার পরে সে যখন সব চেয়ে lowes element কে আগে event টা কে trecker করবে তারপর ঊপরেরটা তারপর তার ঊপরেরটা  এভাবে  আস্তে আস্তে event গুলা ঊপরের দিকে যাবে । 
*/

// 7. JavaScript event bubble কে কিভাবে stop করবো ? 
// JavaScript event bubble এ stopPropagation() কি কাজ করে ? 

/* 
    JavaScript event bubble কে stop করার জন্য আমাকে stopPropagation() use করতে হবে । 
*/

// 8. JavaScript event delegate কি ?

/* 
    কোনো কেত্রে child এর কাজটা child এর মধ্যে না দিয়ে কিছু বেনিফিট পাওয়ার জন্য parent কে দিয়ে দাও এটাকে বলে delegate ।
    মানে নিজের কাজটা নিজে না করে কিছু বেনিফিটের আসায় অন্যকে দিয়ে করানো । 
*/