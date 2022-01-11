// // / سلکتور ها بر اساس اتربیوت وایدی و..
// $(document).ready(function() {

//     $("#Button_1").click(function() {
//         $("#IdSelector").fadeOut(3000);
//     });

//     $("#Button_2").click(function() {
//         $(".test").fadeOut(3000);
//     });

//     $("#Button_3").click(function() {
//         $("*").fadeOut(3000);
//     });

//     $("#Button_4").click(function() {
//         $("[TestName*='TestValue']").fadeOut(3000);
//     });

//     $("#Button_5").click(function() {
//         $("[WordName~='WordValue']").fadeOut(3000);
//     });

//     $("#Button_6").click(function() {
//         $("[EndWith$='ad']").fadeOut(3000);
//     });

//     $("#Button_7").click(function() {
//         $("[Equal='Hello']").fadeOut(3000);
//     });


//     $("#Button_8").click(function() {
//         $("[StartWith^='He']").fadeOut(3000);
//     });

//     $("#Button_9").click(function() {
//         $(":button").fadeOut(3000);
//     });

//     $("#Button_10").click(function() {
//         $(":checkbox").fadeOut(500);
//     });

//     $("#Button_11").click(function() {
//         $("#Parent > p").fadeOut(500);
//     });

//     $("#Button_12").click(function() {
//         $("#Contains:contains('test')").fadeOut(500);
//     });

//     $("#Button_13").click(function() {
//         $("#descendantId p").fadeOut(500);
//     });

//     $("#Button_14").click(function() {
//         $("input:disabled").fadeOut(500);
//     });

//     $("#Button_15").click(function() {
//         $("input:enabled").fadeOut(500);
//     });

//     $("#Button_16").click(function() {
//         $("div:empty").fadeOut(500);
//     });
// });

// $("#Button_17").click(function() {
//     $("#indexSelector p:eq(0) ,#indexSelector p:eq(1)").fadeOut(500);
// });

// $("#Button_18").click(function() {
//     $("#evenSelector p:even").fadeOut(500);
// });

// $("#Button_19").click(function() {
//     $("#fileSelector :file").fadeOut(500);
// });

// $("#Button_20").click(function() {
//     $("#childSelector p:first-child").fadeOut(500);
// });

// $("#Button_21").click(function() {
//     $("p:first-of-type").fadeOut(500);
// });


// $("#Button_22").click(function() {
//     $("#firstSelector p:first").fadeOut(500);
// });

// $("#Button_23").click(function() {
//     $("#greaterthanSelector p:gt(1)").fadeOut(500);
// });


// $("#Button_24").click(function() {
//     $("div[HasAttribute]").fadeOut(500);
// });

// $("#Button_25").click(function() {
//     $("div.hasClass:has(p)").fadeOut(500);
// });

// $("#Button_26").click(function() {
//     $("#LastChild p:last-child").fadeOut(500);
// });

// $("#Button_27").click(function() {
//     $("#LastOfType p:last-of-type").fadeOut(500);
// });

// $("#Button_28").click(function() {
//     $("#LastSelector p:last").fadeOut(500);
// });

// $("#Button_29").click(function() {
//     $("#LessThan p:lt(4)").fadeOut(500);
// });

// $("#Button_30").click(function() {
//     $("div[class][multipleAttribute*='Te']").fadeOut(500);
// });

// $("#Button_31").click(function() {
//     $("div.MultipleSelector , #MultipleSelector").fadeOut(500);
// });

// $("#Button_32").click(function() {
//     $("#NextAdjacent + div + p").fadeOut(500);
// });

// $("#Button_33").click(function() {
//     $("#NextSiblings ~ p").fadeOut(500);
// });


// $("#Button_34").click(function() {
//     $("input:not(:checked) , input:not(:checked) + span").fadeOut(500);
// });

// $("#Button_35").click(function() {
//     $("#nth_Child ul li:nth-child(1n)").fadeOut(500);
// });

// $("#Button_36").click(function() {
//     $("#nth_Last_Child ul li:nth-last-child(2)").fadeOut(500);
// });

// $("#Button_37").click(function() {
//     $("#nth_Of_Type div p:nth-of-type(2)").fadeOut(500);
// });

// $("#Button_38").click(function() {
//     $("#nth_Last_Of_Type div p:nth-last-of-type(2)").fadeOut(500);
// });

// $("#Button_39").click(function() {
//     $("#Only_Child li:only-child").fadeOut(500);
// });

// $("#Button_40").click(function() {
//     $("#Only_Of_Type b:only-of-type").fadeOut(500);
// });

// $("#Button_41").click(function() {
//     $("#Parent_Selector td:parent").fadeOut(500);
// });
// $("#btn").hover(function() {
//     $("#tag").fadeOut(2000);

// }, function() {
//     $("#tag").fadeIn(2000);
// });
// $(window).mousemove(function(e) {
//     console.log(e.pageX, e.pageY)
// });
// $("#keyup").keypress(function() {
//     var text = $("#keyup").val();
//     $("#texr").text(text);

// });
// سلکت
// $("#selec").change(function() {
//     var texr = $("#selec :selected").text();
//     $("#csd").text(texr);

// });
// ایونت سلکت
// $("#inp").select(function() {
//     alert("Sd")

// });
// فانکشن ready
// $.holdReady(true)
// $(document).ready(function() {
//     alert("sd")
// });
// $.holdReady(false)
// اظافه کردن روییداد با on و برداشتن اون روییدا با off
// یک بار اجرا شدن روییداد ازone استفاده میکنیم 
// $("#btn").on("click mousemove", function() {
//     alert("sd")
// });
// $("#btn").on({
//     click: () => {
//         alert("sd")
//     },
//     mouseleave: () => {
//         alert("mouseleave")
//     }
// });
// $("#btn").off("click")
// $("#btn").one("click", function(e) {
//     alert("sd")
// });
// گرفتن تارگت و ولیو
// $("#btn").trigger("click");
// $("#myDeletegate").on("click", "button", function(e) {
//     alert(e.delegateTarget);
// });
// $("#data").on("click", { value: 'test' }, function(event) {
//     alert(event.data.value);
// });
// برای گرفتن تارگت مورد نظر
// $("body").click(function(e) {
// alert(e.target.nodeName)
//     alert(Math.floor(e.timeStamp))
//     console.log(e.timeStamp)
// });
// which
// $("#inp").keydown(function(e) {

//     console.log(e.which)
// });
// $("#btn").click(function(e) {
//     
//     var dsc = document.getElementById("text")
//     if (dsc.classList == "text-danger") {
//         dsc.classList.remove("text-danger")
//     }
// });
// ست و گت کردن css
// $("#div").click(function() {

//     // $(this).css(["width", "height"]); get
//     var set = $(this).css({ "width": "+=50px", "height": "+=50px" });
//     debugger

// });
// $("#div").height("500px");
// $(selector).css(propertyName, value);
// $("#btn").click(function() {
//     var offset = $("#btn").offset();
//     var position = $("#btn").position();
//     debugger
// });
// اتریبیوت و پراپ  برای گت کردن و ست کردن
// var ddiv = $("#div").attr("class");
// // alert(ddiv)
// $("#btn").click(function(e) {
//     var val = $("#inp").prop("value");
//     alert(val)

// });

// دستور العمل

// $(selector).attr(attributeName, value);

// $(selector).attr({
//     attributeName1: value1,
//     attributeName2: value2
// });

// $(selector).attr(attributeName,function(){
//     return value;
// });

// نمونه ها

// $("#input").attr("value", "changed");

// $("#input").attr({
//     value: "mohammad",
//     class: "addedClass"
// });

// $("#input").attr("value", function () {
//     return "mohammad";
// });

// $("#input").removeAttr("class");

// setInterval(() => {
//     $("#input").attr("class", "form-control");
// }, 3000);

// });





// $(selector).prop(attributeName);


// $("#test2").click(function (e) {
//     var propValue = "prop :" + $("#input2").prop("value");

//     var attrValue = "attr :" + $("#input2").attr("value");


//     console.log(propValue);
//     console.log(attrValue);
//     console.log("........................");
// });



// $("#test2").click(function(e) {

// دستور العمل

// $(selector).attr(attributeName, value);

// $(selector).attr({
//     attributeName1: value1,
//     attributeName2: value2
// });

// $(selector).attr(attributeName,function(){
//     return value;
// });

// نمونه ها

// $("#input2").prop("value", "changed");

// $("#input2").prop({
//     value: "mohammad",
//     class: "addedClass"
// });

// $("#input2").prop("value", function () {
//     return "mohammad";
// });

// $("#input2").removeProp("test");



// setInterval(() => {
//     $("#input2").prop("class", "form-control");
// }, 3000);

// });

// $("#test3").click(function (e) {

//     // var data = $("#input3").val();

//     $("#input3").val("changed");
//     var data = $("#input3").val();
//     alert(data);

// });

// });
// کپی کردن یک تگ clone    wrap inner گرفتن محتویات داخل تگ و محصور کردن داخل یک تگ دیگه
// wrap کردن یا محصور کردن یک تگ
// $("#btn").click(function(e) {
//     var copy = $("#paragraf").clone();
//     $("#appen").append(copy);
//     $("#str").wrap("<div class='bg-info'></div>");
//     $("#str").wrapInner("<b></b>");
//     $("#str").after("<h2>hello guys</h2>");
// });

// append and perepent
// $(document).ready(function() {

//             $("#AppendButton").click(function(e) {

// $(target).append(content);
//$("#AppendTest").append("<p>appended paragraph with append function</p>","<h4>header appended</h4>");

// $("#AppendTest").append(function (index, html) {
//     var html = html;
//     var index = index;
//     debugger;
//     return ["<p>appended paragraph with append function</p>", "<p>test</p>"];
// });

//         var strong = $("#strong");

//         $("#para").append(strong);
//     });


//     $("#AppendToButton").click(function(e) {

//         // $(content).appendTo(target);

//         $("<p>hi mohammad</p>").appendTo("#AppendToTest");

//     });


//     $("#PrependButton").click(function(e) {
//         // $(target).prepend(content);

//         // $("#PrependTest").prepend("<p>prepend</p>","<p>second prepend</p>");

//         $("#PrependTest").prepend(function(index, html) {
//             var html = html;
//             var index = index;
//             debugger;
//             return ["<p>prepend paragraph with prepend function</p>", "<p>test</p>"];
//         });

//         // var strong = $("#strong_Pre");

//         // $("#para_Pre").prepend(strong);

//     });

//     $("#PrependToButton").click(function(e) {

//         // $(content).prependTo(target);

//         $("<p>prepend</p>").prependTo("#PrependToTest");
//     });

//     $("#HtmlButton").click(function(e) {
//         var html = $("#HtmlTest").html();
//         //debugger;
//         alert(html);

//         // $("#HtmlTest").html("<h3>edited html </h3>");
//     });

//     $("#TextButton").click(function(e) {

//         var text = $("#TextTest").text();
//         var html = $("#TextTest").html();
//         alert(text);
//         alert(html);

//     });

// });

//  empety and remove and detach

// $(document).ready(function() {

//     $("#EmptyButton").click(function(e) {
//         $("#EmptyTest p").empty();
//     });

//     $("#RemoveButton").click(function(e) {
//         $("#RemoveTest p").remove();
//     });

//     var p;

//     $("#DetachButton").click(function(e) {
//         debugger;
//         if (p) {
//             $("#DetachTest").append(p);
//             p = null;
//         } else {
//             p = $("#DetachTest p").detach();
//         }

//         // var x;
//         // $("#Button1").click(function() {
//         //     x = $("#demo").detach();
//         // });
//         // $("#Button2").click(function() {
//         //     $("#back").prepend(x);
//         // });
//     });

//     $("#ReplaceAllButton").click(function(e) {
//         //$(new content).replaceAll(target);
//         $("<p> replaced with new paragraph </p>").replaceAll("#ReplaceAllTest p");
//     });

//     $("#ReplaceWithButton").click(function(e) {
//         // $(target).replaceWith(newContent);
//         $("#para").replaceWith("<p> replaced with new paragraph </p>");
//     });

// });

//  show and hide
// $(document).ready(function() {

//     $("#ShowButton").click(function(e) {
//         // $(selector).show();
//         // $("#ShowTest p").show("slow");
//         $("#ShowTest p").show(150);

//         // $("#ShowTest p").show(5000, function() {
//         //     alert("hello");
//         // });

//         // $("#ShowTest p").first().show(100, function NextParagraph() {
//         //     $(this).next("p").show(1000, NextParagraph);
//         // });
//     });



//     $("#HideButton").click(function(e) {
//         // $(selector).hide();
//         // $("#HideTest p").hide("slow");
//         // $("#HideTest p").hide(1000);

//         // $("#HideTest p").hide(1000,function(){
//         //     alert("hello");
//         // });

//         $("#HideTest p:last-child").hide(1000, function HideNext() {
//             $(this).prev().hide(1000, HideNext);
//         });
//     });


//     $("#ToggleButton").click(function(e) {
//         // $("#ToggleTest p").toggle("slow");
//         // $("#ToggleTest p").toggle(1000);

//         // $("#ToggleTest p").toggle(1000, function() {
//         //     alert('hello');
//         // });

//         var status = false;

//         $("#ToggleTest p").toggle(status);
//     });

// });
// slider

// $("#SlideDownButton").click(function(e) {
//     // $(selector).slideDown();
//     $("#SlideDownTest p").slideDown("slow");
//     // $("#SlideDownTest").slideDown(2000);
//     // $("#SlideDownTest p").first().slideDown(1000, function NextSlide() {
//     //     $(this).next("p").slideDown(1000, NextSlide);
//     // });
// });

// $("#SlideUpButton").click(function(e) {

//     // $("#SlideUpTest").slideUp("slow");
//     $("#SlideUpTest p").slideUp(2000);

//     // $("#SlideUpTest").slideUp(1000, function() {
//     //     alert('Done');
//     // });

// });

// $("#SlideToggleButton").click(function(e) {
//     $("#SlideToggleTest p").slideToggle(1500);
// });

// fadeIn fadeOut

//     $("#FadeInButton").click(function(e) {
//         // $(selector).fadeIn();

//         // $("#FadeInTest p").fadeIn();
//         // $("#FadeInTest p").fadeIn(2000);
//         // $("#FadeInTest p").fadeIn("slow");
//         // $("#FadeInTest p").fadeIn(1000,function(){
//         //     console.log('hello');
//         // });

//         $("#FadeInTest p").first().fadeIn(1000, function NextFade() {
//             $(this).next("p").fadeIn(1000, NextFade);
//         });
//     });



//     $("#FadeOutButton").click(function(e) {
//         // $(selector).fadeOut();
//         // $("#FadeOutTest p").fadeOut();
//         $("#FadeOutTest p").fadeOut(1000);
//         // $("#FadeOutTest p").fadeOut("fast");

//         // $("#FadeOutTest p").fadeOut(1000, function () {
//         //     console.log('hello');
//         // });

//         // $("#FadeOutTest p:last-child()").fadeOut(1000, function PrevFade() {
//         //     $(this).prev("p").fadeOut(1000, PrevFade);
//         // });
//     });

//     $(".colored").click(function(e) {
//         // $(selector).fadeTo(duration, opacity);
//         // $(this).fadeTo(200, 0.2);
//         $(this).fadeTo(200, 0.2, function() {
//             console.log('test');
//         });
//     });

//     $("#FadeToggleButton").click(function(e) {
//         $("#FadeToggleTest p").fadeToggle(200);
//     });


// made in animate
// $(document).ready(function() {

//     $(".colored").click(function(e) {

//         //$(selector).animate(propery,option);
//         //$(selector).animate(propery,duration,easing);

//         $(this).animate({
//             "height": "20px",
//             "width": "20px",
//             "opacity": "0.3"
//         }, {
//             duration: 1000,
//             done: function() {
//                 console.log('hello');
//             }
//         });

//     });

//     $("#DelayButton").click(function(e) {
//         $("#div_1").slideUp(2000).slideDown(2000);
//         $("#div_2").slideUp(2000).delay(1000).slideDown(2000);
//     });

//     $("#StopButton").click(function(e) {
//         $("#StopDiv").stop().slideToggle(1500);
//     });

//     $("#StrButton").click(function(e) {
//         $(".inside").animate({ "bottom": "0px", "right": "0px" }, 2000);
//         $(".inside").animate({ "right": "0px" }, 2000);
//         $(".inside").animate({ "top": "0px" }, 2000);

//     });

//     $("#FinButton").click(function(e) {

//         $(".inside").finish(1000);
//     });

// });
// clear and queue
// $(document).ready(function() {

//     var toggleFx = function() {
//         $.fx.off = !$.fx.off;
//     };

//     // toggleFx();

//     $("#StrButton").click(function(e) {
//         $(".inside").animate({ "bottom": "0" }, 2000); // 1
//         $(".inside").animate({ "left": "70" }, 2000); // 2
//         $(".inside").queue(function() {
//             $(this).css({ "background-color": "red" }).dequeue(); // 3
//         });
//         $(".inside").animate({ "top": "0" }, 2000); // 4
//     });

//     $("#ClearButton").click(function(e) {
//         $(".inside").clearQueue();
//         $(".inside").stop();
//     });

//     $("#OffButton").click(function(e) {
//         toggleFx();
//     });

// });