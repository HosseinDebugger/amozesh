var $ = document
    // const left = _id("product");
    // const rhight = $.getElementsByTagNameNS("li");

// function Myfunc() {
//     var neww = $.createElementNS("li").innerHTML = "csad"
//     left.appendChild("neww")
// }
// DOM => Document Object Model

// const image = document.querySelector("#cover");
// const title = document.getElementById("title");
// const artist = document.getElementById("artist");
// const music = document.querySelector("audio");
// const currentTimeEl = document.getElementById("current-time");
// const durationEl = document.getElementById("duration");
// const progress = document.getElementById("progress");
// const progressContainer = document.getElementById("progress-container");
// const prevBtn = document.getElementById("prev");
// const playBtn = document.getElementById("play");
// const nextBtn = document.getElementById("next");
// const background = document.getElementById("background");

// // Music
// const songs = [{
//         path: "https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/1.mp3",
//         displayName: "Yıldız Tozu",
//         artist: "Ozbi",
//         cover: "ozbi-yıldız-tozu-kapak.jpg",
//     },
//     {
//         path: "https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/2.mp3",
//         displayName: "You're Somebody Else",
//         artist: "flora cash",
//         cover: "https://pbs.twimg.com/media/D2NZH-2U4AAL9Xs.jpg",
//     },
//     {
//         path: "https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/3.mp3",
//         displayName: "Powerless",
//         artist: "Linkin Park",
//         cover: "https://images.genius.com/c5a58cdaab9f3199214f0e3c26abbd0e.1000x1000x1.jpg",
//     },
//     {
//         path: "https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/4.mp3",
//         displayName: "Seni Dert Etmeler",
//         artist: "Madrigal",
//         cover: "https://www.radyomega.fm/wp-content/uploads/2020/04/MADRIGAL-600.jpg",
//     },
//     {
//         path: "https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/5.mp3",
//         displayName: "Ederlezi",
//         artist: "Solomun",
//         cover: "https://m.media-amazon.com/images/I/616t0841uvL._SS500_.jpg",
//     },
// ];

// // Check if Playing
// let isPlaying = false;

// // Play
// function playSong() {
//     isPlaying = true;
//     playBtn.classList.replace("fa-play", "fa-pause");
//     playBtn.setAttribute("title", "Pause");
//     music.play();
// }
// console.log(playSong())

// // Pause
// function pauseSong() {
//     isPlaying = false;
//     playBtn.classList.replace("fa-pause", "fa-play");
//     playBtn.setAttribute("title", "Play");
//     music.pause();

// }

// // Play or Pause Event Listener
// playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// // Update DOM
// function loadSong(song) {
//     title.textContent = song.displayName;
//     artist.textContent = song.artist;
//     music.src = song.path;
//     changeCover(song.cover);
// }

// function changeCover(cover) {
//     image.classList.remove("active");
//     setTimeout(() => {
//         image.src = cover;
//         image.classList.add("active");
//     }, 100);
//     background.src = cover;
// }

// // Current Song
// let songIndex = 0;

// // Previous Song
// function prevSong() {
//     songIndex--;
//     if (songIndex == 0) {
//         songIndex = songs.length - 1;
//     }
//     loadSong(songs[songIndex]);
//     playSong();
// }

// // Next Song
// function nextSong() {
//     songIndex++;
//     if (songIndex > songs.length - 1) {
//         songIndex = 0;
//     }
//     loadSong(songs[songIndex]);
//     playSong();
// }

// // On Load - Select First Song
// loadSong(songs[songIndex]);

// // Update Progress Bar & Time
// function updateProgressBar(e) {
//     if (isPlaying) {
//         const { duration, currentTime } = e.srcElement;
//         // Update progress bar width
//         const progressPercent = (currentTime / duration) * 100;
//         progress.style.width = progressPercent + "%";
//         // Calculate display for duration
//         const durationMinutes = Math.floor(duration / 60);
//         let durationSeconds = Math.floor(duration % 60);
//         if (durationSeconds < 10) {
//             durationSeconds = "0" + durationSeconds;
//         }
//         // Delay switching duration Element to avoid NaN
//         if (durationSeconds) {
//             durationEl.textContent = durationMinutes + ":" + durationSeconds;
//         }
//         // Calculate display for currentTime
//         const currentMinutes = Math.floor(currentTime / 60);
//         let currentSeconds = Math.floor(currentTime % 60);
//         if (currentSeconds < 10) {
//             currentSeconds = "0" + currentSeconds;
//         }
//         currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
//     }
// }

// // Set Progress Bar
// function setProgressBar(e) {
//     const width = this.clientWidth;
//     const clickX = e.offsetX;
//     const { duration } = music;
//     music.currentTime = (clickX / width) * duration;
// }

// // Event Listeners
// prevBtn.addEventListener("click", prevSong);
// nextBtn.addEventListener("click", nextSong);
// music.addEventListener("ended", nextSong);
// music.addEventListener("timeupdate", updateProgressBar);
// progressContainer.addEventListener("click", setProgressBar);
// موزیک پلیر
// var musici = ["2pac-time.mp3", "01.Snoop Dogg - Left My Weed (feat. Devin The Dude, J Black).mp3", "12. 8 Mile.mp3", "50Cent - Ayo Technology.mp3", "Billie_Eilish_Getting_Older_320.mp3", "04.XXXTENTACION - Look At Me (Sakura Remix).mp3"]
// var aud = $.getElementById("aud")

// function myfunc(event) {

//     if (event.target.dataset.music == "topac") {
//         aud.setAttribute("src", musici[0])
//         aud.play()
//     }
//     if (event.target.dataset.music == "snop") {
//         aud.setAttribute("src", musici[1])
//         aud.play()
//     }
//     if (event.target.dataset.music == "emenem") {
//         aud.setAttribute("src", musici[2])
//         aud.play()
//     }
//     if (event.target.dataset.music == "50cent") {
//         aud.setAttribute("src", musici[3])
//         aud.play()
//     }
//     if (event.target.dataset.music == "bili") {
//         aud.setAttribute("src", musici[4])
//         aud.play()
//     }
//     if (event.target.dataset.music == "xxx") {
//         aud.setAttribute("src", musici[5])
//         aud.play()
//     }

// }
//  پروژه مدال
// const effect = $.getElementById("sec")
// const mdl = $.getElementById("mfd")
// const btnClose = $.getElementById("btn-close")
// const button = $.getElementById("btn")
// const modaal = $.getElementById("modl")
// button.addEventListener("click", () => {
//     modaal.style.display = "block"
//     effect.style.filter = "blur(10px)"
// })
// btnClose.addEventListener("click", () => {
//     modaal.style.display = "none"
//     effect.style.filter = "blur(0px)"
// })
// modaal.addEventListener("click", (event) => {
//     if (
//         event.target.dataset.close == "close") {
//         modaal.style.display = "none"
//         effect.style.filter = "blur(0px)"
//     }
// })
// پروژه نوت
// const input = $.getElementById("input-field")
// const task = $.getElementById("listed")
// const color = $.getElementById("color-select")
// const btnSave = $.getElementById("btn-save")
// const btnDelet = $.getElementById("btn-delete")
// btnSave.addEventListener("click", Addbtn)

// function Addbtn() {
//     if (input.value == "") {
//         alert("not'is Valid")
//         removeChild
//     }
//     var cret = $.createElement("p")
//     cret.innerHTML = input.value
//     task.append(cret)
//     cret.setAttribute("class", "Add")
//     cret.style.backgroundColor = input.style.backgroundColor
//     btnDelet.addEventListener("click", () => { task.removeChild(cret) })
//     input.value = ""
// }

// color.addEventListener("click", Addcolor)

// function Addcolor(event) {
//     var rang = event.target.dataset.color
//     input.style.backgroundColor = rang

// }
// پروژه کیپ دون
// const hed = $.getElementById("ascii")
// const inf = $.getElementById("infos")
// const start = $.getElementById("starter-text")
// const hedKey = $.getElementById("keyCode")
// const key = $.getElementById("key")
// const loc = $.getElementById("location")
// const wit = $.getElementById("which")
// const cod = $.getElementById("code")
// const user = $.getElementById("heading")
// $.addEventListener("keydown", (event) => {
//     hedKey.innerHTML = event.keyCode
//     key.innerHTML = event.key
//     loc.innerHTML = event.location
//     wit.innerHTML = event.which
//     cod.innerHTML = event.code

//     key.style.display = "block"
//     inf.style.display = "block"
//     hed.style.display = "block"
//     hedKey.style.display = "block"
//     start.style.display = "none"
//     user.style.display = "block"
// })

//  منو 
// let home = $.querySelector('#home')
// let shop = $.querySelector('#shop')
// let basket = $.querySelector('#basket')
// let about = $.querySelector('#about')
// let contact = $.querySelector('#contact')
// let animElem = $.querySelector('.anim')

// home.addEventListener('mouseenter', () => {
//     animElem.style.width = '78px'
//     animElem.style.marginRight = '0px'
// })

// shop.addEventListener('mouseenter', () => {
//     animElem.style.width = '109px'
//     animElem.style.marginRight = '91px'
// })

// basket.addEventListener('mouseenter', () => {
//     animElem.style.width = '121px'
//     animElem.style.marginRight = '217px'
// })

// about.addEventListener('mouseenter', () => {
//     animElem.style.width = '109px'
//     animElem.style.marginRight = '351px'
// })

// contact.addEventListener('mouseenter', () => {
//     animElem.style.width = '125px'
//     animElem.style.marginRight = '476px'
// })
// اسکرول
// $.addEventListener("scroll", () => {
//     console.log(window.pageYOffset)
//     if (window.pageYOffset > 400) { alert("sd") }
// })
// متود های اسکرول
// let btnScroll = $.querySelector("button")
// btnScroll.addEventListener("click", () => {
//     window.scrollTo(250, 240)
//     window.scrollBy(100, 100)
// })
// $.addEventListener("scroll", () => {
//     console.log(window.pageYOffset, window.pageXOffset)
// })
//  ناو بار با اسکرول
// const meno = $.getElementById("mainNav")
// const btn = $.querySelector("button").addEventListener("click", () => {
//     window.scrollTo(0, 0)

// })
// $.addEventListener("scroll", menoScrol)

// function menoScrol() {
//     if (window.pageYOffset > 2) {
//         meno.classList.add("menoS")

//     } else if (window.pageYOffset == 0) { meno.classList.remove("menoS") }
//     console.log(window.pageYOffset)
// }
// فانکشن برای استایل های اکسترنال
// var h = getComputedStyle($.querySelector("h1"))
// console.log(h.color, h.margin)
//  روییدا اسکرین 
// console.log('width', screen.width)
// console.log('height', screen.height)
// console.log('availWidth', screen.availWidth)
// console.log('availHeight', screen.availHeight)
// console.log('pixelDepth', screen.pixelDepth)
// console.log('colorDepth', screen.colorDepth)
// روییداد resize
// window.onresize = func

// function func() {
//     alert("resize")
// }

// const typer = $.getElementById("display")
// const keybord = $.querySelectorAll("button")
// var text = ""
// for (var i = 0; i < keybord.length; i++) {
//     addEventListener("click", founc)
// }

// function founc(event) {


//     if (mainKey == "btn-clear") {
//         alert("Ds")
//     }

//     var mainKey = event.target.dataset.key
//     typer.innerHTML = text + mainKey
//     text = text + mainKey

// }



// function _id(id_name) {
//     return $.getElementById(id_name);
// }

// function _class(class_name) {
//     return $.getElementsByClassName(class_name);
// }

// // Select Elems
// var togglePassword = _class("toggle-password");
// var passwordField = _id("password-field");

// //  console.log(togglePassword)

// // Fire click event on eye icon
// togglePassword[0].addEventListener("click", function() {
//     if (passwordField.type == "text") {
//         passwordField.type = "password";
//         togglePassword[0].classList.remove("active");

//     } else {
//         passwordField.type = "text";
//         console.log(togglePassword)
//         togglePassword[0].classList.add("active");
//     }
// })
// const countriesSelectBox = $.getElementById('country')
// const citiesSelectBox = $.getElementById('city')

// let citiesData = {
//     iran: ["تبریز", "تهران", "شیراز", "اصفهان", "مشهد"],
//     turkey: ["استانبول", "ازمیر", "آنکارا", "آنتالیا"],
//     usa: ["لس آنجلس", "واشنگتن", "شیکاگو", "نیویورک", "سن دیگو"],
// }

// countriesSelectBox.addEventListener('change', () => {
//     let valueCount = countriesSelectBox.value
//     let dataCiti = citiesData[valueCount]
//     citiesSelectBox.innerHTML = ""
//     dataCiti.forEach(citi => {
//         citiesSelectBox.innerHTML += '<option>' + citi + '</option>'
//     });


// })
// توضیح ریترن
// var plus = 4

// var md = function myfunc() {
//     if (plus == 4) {
//         return true
//     }

// }
// alert(md())

// function myfunc() {
//     if (plus == 4) {
//         return true
//     }

// }
// alert(myfunc())
var input = $.getElementById("ValuePlus")
var select = $.getElementById("select")

let users = [
    'علی',
    'امین',
    'محمد',
    'بابک',
]

const setUsers = () => {
    users.forEach(user => {
        select.innerHTML += '<option>' + user + '</option>'
    })
}

window.addEventListener("load", setUsers)

input.addEventListener("blur", () => {
    $.getElementById("pi").innerHTML = input.value
})