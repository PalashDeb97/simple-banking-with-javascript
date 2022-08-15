
//1/ document.getElementsByTagName() হচ্ছে কোনো tag কে ধরে style দেয়ার জন্য । 
const blogs = document.getElementsByTagName('article');
for (const blog of blogs) {
    blog.style.border = '4px solid #ffc107';
    blog.style.backgroundColor = 'rgb(255 235 59 / 20%)';
    blog.style.margin = '15px';
    blog.style.padding = '15px';
    blog.style.textAlign = 'center';
    blog.style.borderRadius = '20px';
}


//2/ document.getElementById() হচ্ছে কোনো id কে ধরে style দেয়ার জন্য । 

let idText = document.getElementById('id-Text'); // কোনো id কে ধরার জন্য id এর নাম দিতে হবে 
idText.innerText = 'lorem20';   // id এর text change করার জন্য
idText.style.color= 'red';
idText.style.textAlign = 'center';


//3/ document.getElementsByClassName() হচ্ছে কোনো class কে ধরে style দেয়ার জন্য । 

const firstPara = document.getElementsByClassName('firstpara'); // কোনো class কে ধরার জন্য class এর নাম দিতে হবে 
for (let firstpara of firstPara) { // তারপর for loop দিতে হবে ।
    firstpara.style.border = '2px solid red';
    firstpara.style.borderRadius = '5px';
}

//4/ document.querySelector() হচ্ছে কোনো css class অনেক গুলা আছে কিন্তু সে আমাকে প্রথমটা কে ধরে style দিবে । 

const blog = document.querySelector('.blog');
blog.style.border = '2px solid green';
blog.style.margin = '15px';

//5/ //4/ document.querySelectorAll()


//6/ js dom দিয়ে html code create করার জন্য 

    // --> Example 1
const article = document.createElement('article'); // নতুন article tag create করার জন্য
article.classList.add('blog'); // css class add করার জন্য
const h3 = document.createElement('h3'); // নতুন h3 tag create করার জন্য
h3.innerText = 'Blog 4'; // h3 এর text add করার জন্য
const p = document.createElement('p'); // নতুন paragraph tag create করার জন্য
p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.'; // paragraph এর text add করার জন্য
article.appendChild(h3); // article এর বিতরে h3 set করার জন্য 
article.appendChild(p); // article এর বিতরে paragraph set করার জন্য 
// বাবা - মা কে না ধরলে article কাজ করবে না  
const section = document.getElementById('section-id'); // article এর বাবাকে ধরার জন্য
section.appendChild(article); // section এর বিতরে article set করার জন্য 

    // --> Example 2
const article2 = document.createElement('article');
article.classList.add('blog');
article.innerHTML = `
    <h3>Blog 5</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.</p>   
`
const section2 = document.getElementById('section-id');
section.appendChild(article);



//7/ removeChild() কোনো কিছু remove করার জন্য 

const blogTwoNum = section.children[0]; // indexOf() এর মতো কিছু elements বা সংখ্যা আছে কিন্তু আমি জানতে চাই বিশেষ একটা elements বা সংখ্যা কত তম পজিশনে আছে । 
const section1 = document.getElementById('section-id');
section1.removeChild(blogTwoNum);



//8/ click করলে কিছু একটা change হবে 
/// addEventListener() 

// --> Example 1
<button onclick="clickColor()" class="btn2">Color 1</button>
function clickColor() {
    document.body.style.backgroundColor = 'goldenrod';
}

// --> Example 2 -- anonymous function
<button id="color2" class="btn2">Color 2</button>
const color2 = document.getElementById('color2');
color2.onclick = function() {
    document.body.style.backgroundColor = 'green';
}

// --> Example 3
//<button id="color3" class="btn2">Color 3</button>
const color3 = document.getElementById('color3');
color3.addEventListener('click', redColor);
function redColor(){
    document.body.style.backgroundColor = 'red';
}

// --> Example 4
<button id="color4" class="btn2">Color 4</button>
const color4 = document.getElementById('color4');
color4.addEventListener('click', function(){
    document.body.style.backgroundColor = 'khaki';
})

// --> Example 5 -- shortcut
{/* <button id="color5" class="btn2">Color 5</button> */}
document.getElementById('color5').addEventListener('click', function(){
    document.body.style.backgroundColor = 'hotpink';
})


//9/ কিভাবে new blog add করবো এবং কিভাবে blog remove করবো ??

/*
<button id="addBlog" class="btn">ADD BLOG</button>
<button id="removeBlog" class="btn">REMOVE BLOG</button>
<section id="section-id">
    <article class="blog">
        <h3>Blog 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.</p>
    </article>
</section>
*/
// --> add new blog
document.getElementById('addBlog').addEventListener('click', function(){
    const article = document.createElement('article');
    article.classList.add('blog');
    article.innerHTML = `
        <h3>New Blog</h3>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati.
        </p>
    `;
    const section = document.getElementById('section-id');
    section.appendChild(article);
});

// --> remove blog
document.getElementById('removeBlog').addEventListener('click', function(){
    const removeArticle = document.getElementsByTagName('article')[0];
    const section = document.getElementById('section-id');
    section.removeChild(removeArticle);
})


//10/ input field এর value কিভাবে p teg এ show করবো ?

{/* <p id="pera"></p>
<input id="input-field" class="btn" type="text" />
<button id="update-btn" class="btn2">UPDATE</button> */}
document.getElementById("update-btn").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const p = document.getElementById("pera");
  p.innerText = inputField.value;
  inputField.value = "";
});



//11. কিভাবে ফেইসবুক এর মতো comment করতে হয় 

/* 
<section id="comment-section">
    <h2>your comments</h2>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
</section>
<textarea id="new-comment" cols="40" rows="4"></textarea>
<br />
<button id="post-btn">Post</button>
*/

//1. id দিয়ে button কে ধরলাম
document.getElementById("post-btn").addEventListener("click", function () {
    //2. id দিয়ে input field area কে ধরলাম
    const newComment = document.getElementById("new-comment");

    //3. create new comment peragraph
    const p = document.createElement("p");
    p.innerText = newComment.value;

    //4. id দিয়ে peragraph এর বাবা মা কে ধরলাম
    const commentSection = document.getElementById("comment-section");
    commentSection.appendChild(p);

    //5. তারপর আমি input box খালি করে দিলাম
    newComment.value = "";
});



//12. addEventListener() এর কিছু event এর কাজ 

// click --> btn বা কোনো কিছুতে click করলে কিছু হবে 
document.getElementById('delete-btn').addEventListener('click', function(){
    document.getElementById('secret-info').style.display = 'none';
});

// focus --> input box এর ভিতর click বা focus করলে কিছু হবে
document.getElementById('delete-confirm').addEventListener('focus', function(){
    document.body.style.backgroundColor = 'red';
})

// blur --> input box এর বাইরে click করলে করলে কিছু হবে
document.getElementById('delete-confirm').addEventListener('blur', function(){
    document.body.style.backgroundColor = 'white';
})

// keydown --> input box এ যা লিখবো তা দেখাবে 
document.getElementById('delete-confirm').addEventListener('keydown', function(){
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);
})

// keypress --> এটা কিছুটা keydown এর মতোই কাজ করে 
document.getElementById('delete-confirm').addEventListener('keypress', function(){
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);
})

// keyup --> input box এ tpye করার সাথে সাথে দেখাবে কিন্তু আগের গুলা সাথে সাথে দেখাতো না 
document.getElementById('delete-confirm').addEventListener('keyup', function(){
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);
})

// change --> input box এ tpye এবং copy paste করার সাথে সাথে দেখাবে না কিন্তু বাইরে click করলে দেখাবে 
document.getElementById('delete-confirm').addEventListener('change', function(){
    const deleteField = document.getElementById('delete-confirm');
    console.log(deleteField.value);
})




//13/ আমি যদি বক্স এ delete লেখি তাহলে delete হবে নাহলে হবে না 

{/* 
<h2 id="secret-info">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
</h2>
<input id="delete-confirm" placeholder="please type detele" type="text" />
<button id="delete-btn" disabled>detele</button> 
*/}

document.getElementById('delete-btn').addEventListener('click', function(){
    document.getElementById('secret-info').style.display = 'none';
});

document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const deleteBtn = document.getElementById('delete-btn');
    if (event.target.value == 'delete') {
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }
})



//14/ delegate দিয়ে item add এবং remove করা 

/* 
<ul id="item-container">
    <li class="item">Lorem, ipsum.</li>
    <li class="item">Unde, atque!</li>
</ul>
<button id="click-btn">click</button> 
*/
// --> add
document.getElementById("click-btn").addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerText = "new item";
    document.getElementById("item-container").appendChild(newItem);
});
// --> remove
document.getElementById("item-container").addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
});