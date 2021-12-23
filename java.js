// برای کم کردن حجم کد
// title= amozesh java
var $ = document;

function _id(id_name) {
    return $.getElementById(id_name)
}

function _class(class_name) {
    return $.getElementByClass(class_name)
}
// var userNameinput = $.getElementById("userName");
// var userPasswordInput = $.getElementById("userPassword");
// var erroSpanUser = $.getElementById("userNameError");
// var userPassword = $.getElementById("userpasswordError");
// console.log(man);
// function userNameValidate() {
//     if (userNameinput.value.length < 8) {
//         erroSpanUser.innerHTML = "گذرواژه شما باید حداقل دارای 8 کاراکتر باشد"
//     } else {
//         erroSpanUser.innerHTML = ""
//     }
// }
// function userPasswordValidate() {
//     if (userPasswordInput.value.length < 8) {
//         userPassword.innerHTML = "گذرواژه شما باید حداقل دارای 8 کاراکتر باشد"
//     } else {
//         userpasswordError.innerHTML = ""
//     }
// }
// پروژه 2
// var creat = $.getElementById("createAccount");
// var login = $.getElementById("loginList");
// login.style.display = "none";
// function showloginForm() {
//     login.style.display = "block";
//    creat.style.display = "none";
// }
// function showCreateAccountForm() {
//     login.style.display = "none";
//     creat.style.display = "block";
// }
// var tag = $.getElementById("P121");
// function myFun() {
//     tag.classList.toggle("amir")
// }
//  روییداد های المان
// function myFunk(event) {
//     console.log(event.target.value)
// } 
// var $ = document;
// var quote = $.getElementById("quote");
// var author = $.getElementById("author");
// var array = [{
//     quote: "hello dostan",
//     author: "amir"
// }, {
//     quote: "hello frinds",
//     author: "Hossein"
// }, {
//     quote: "hello frinds",
//     author: "Hossdsaddin"
// }]
// function generateQuote() {
//     for (var i = 0; i < 5; i++) {
//         quote.innerText = i++;
//     }
// }
// Functions for select elems with id & class
// function myFunc() {
//     var disk = $.getElementById("welc");
//     var elm = $.createElement("img");
//     elm.src = "05.jpg ";

//     disk.append(elm);
// }
// myFunc();
// DOM => Document Object Model
// جلوگیری از تکرار فرم سابمیت یا استفاده از ایونت 
// function submitFunc(event) {
//     event.preventDefault();
//     alert("sa")
// }
// var myForm = document.forms["loginForm"];
// console.log(myForm)
// DOM => Document Object Model
// مینی پروزه برای موس مو
// document.onmousemove = animateCircle;

// function animateCircle(event) {
//     var circle = document.createElement('div')
//     console.log(circle)
//     var colors = ["#f00", "#6cf", "#0f0", "#00f"]
//     circle.setAttribute('class', 'circle')

//     console.log(event)

//     circle.style.left = event.clientX + "px"
//     circle.style.top = event.clientY + "px"
//     circle.style.transition = "all 0.5s linear"

//     document.body.appendChild(circle)

//     circle.style.left = circle.offsetLeft - 20 + "px"
//     circle.style.top = circle.offsetTop - 20 + "px"

//     var mainColor = colors[Math.floor(Math.random() * colors.length)]

//     circle.style.borderColor = mainColor
//     circle.style.width = "50px"
//     circle.style.height = "50px"
//     circle.style.borderWidth = "5px"
//     circle.style.opacity = 0

// }
// اونت های فکوس و بلور
// input.onblur = function() {
//     if (!input.value.includes('@')) { // not email
//         input.classList.add('invalid');
//         error.innerHTML = 'Please enter a correct email.'
//     }
// };

// input.onfocus = function() {
//     if (this.classList.contains('invalid')) {
//         this.classList.remove('invalid');
//         error.innerHTML = "";
//     }
// };
// تایمر با ست اینتر وال
// var timeHurse = 1;
// var timeMin = 30;
// var timeSecend = 60;
// var timer = setInterval(function() {
//     console.log(timeHurse + ":" + timeMin + ":" + timeSecend);
//     timeSecend--;
//     if (timeSecend == 0) {
//         timeSecend = 60;
//         timeMin--;
//     } else if (timeMin < 0) {
//         timeMin = 59;
//         timeHurse--;
//     }
// }, 1000)
// مثال برای prevent default
// function Myfunc() {

//     event.preventDefault()

// }

//  لوکال استوریج 
// BOM => Browser Object Model

// function localStorageFunc() {
// localStorage.setItem('userName', 'ce01010101it') ذخیره کردن آیتم در لوکال استوریج
// console.log(localStorage.getItem('userName')) گرفتن آیتم از لوکال استوریج
// console.log(localStorage.length) تعداد آیتم های داخل لوکال استوریج
// console.log(localStorage.key(0)) دریافت کلید ها با ایندکس
// localStorage.clear() پاک کردن همه آیتم های لوکال استوریج
// }
// مثال برای لوکال 
// var m12 = prompt("عدد مورد نظر را وارد کنید");
// localStorage.setItem('user', m12);
// var pop = localStorage.getItem("user")
// $.write(pop);
// DOM => Document Object Model

// تابع فیلتر برای ارایه ها 
// let myArr = [10, 5, 20, 17, 15, 14]

// var evenNumbers = myArr.filter(item => (item % 2 == 0))

// console.log(evenNumbers)

/////////////////////

// var grades = [{
//         name: "Ali",
//         grade: 10
//     },
//     {
//         name: "Amin",
//         grade: 20
//     },
//     {
//         name: "Mohammad",
//         grade: 18
//     },
//     {
//         name: "Hossein",
//         grade: 5
//     }
// ]

// var finalGrades = grades.filter(item => {
//     if (item.grade < 15) {
//         return item
//     }
// })

// console.log(finalGrades);


// var num = [1, 5, 9, 2]
// var javab = num.filter(eser);

// function eser(item) {
//     if (item == 1) {

//         return alert(item * 5 + 45)

//     } else if (item == 10) {
//         return alert("nis")
//     }
//  تابع مپ برای ارایه 
// }// var products = [
//   {
//     name: "Asus",
//     price: 2500,
//     count: 2,
//   },
//   {
//     name: "Acer",
//     price: 2000,
//     count: 3,
//   },
//   {
//     name: "Hp",
//     price: 1500,
//     count: 4,
//   },
// ];

// let sum = 0;

// var finalArr = products
//   .map((item) => item.price * item.count)
//   .forEach((item) => (sum += item));

// console.log(sum);


//////////////////////////  استفاده از چندین تابع map filter forEach

// var myArr = [2, 4, 5, 1, 3, 0, -1]
// var jam = 0;
// const items = myArr
//     .filter(item => item >= 0)
//     .map(item => ({ value: item }))
//     .filter(item => item.value > 1)
//     .map(item => item.value)
//     .forEach(item => jam += item)


// console.log(jam)
// DOM => Document Object Model

// function clickFunc(param) {
//   console.log(param)
// }

// function keyFunc(param) {
//   console.log(param)
// }

///////////////////////////////

// var a = 10
// var b = 20

// function userCode() {
//   console.log(this)
// }

// userCode()

//////////////////////////////
// var video1 = {
//     title: 'آقازاده',
//     startYear: 1399,
//     mainArtist: 'نیکی کریمی ',
//     videoArr: [18, 20, 10, 12, 19],
//     videoInfo: function() {
//         // console.log(this.startYear)
//         this.videoArr.forEach(function(item) {
//             console.log(item, this.startYear)
//         }, this)
//     },

// }

// function mudx() {
//     alert(
//         this.title + "" +
//         this.mainArtist
//     )
// }
// var sc = "hosseini"
// video1.videoInfo();
// mudx.call(video1);

// پیمایش روی داکیومنت
// var parentDiv = $.getElementById('parent')
// var ind = parentDiv.firstChild
// console.log(ind)