$(document).ready(function(){
    $(document).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 00) {
            $(".navbar").css("background", "black");
        } else {
            $(".navbar").css("background", "none");
        }
    });

    // Additional code goes here if needed
});

var i=0,j=0;

var text ='SIGNATURE RED';
var speed=50;

function typeWriter (){
    if(text.length){
        document.getElementById("autotext").innerHTML += text.charAt(i)
        i++;
        setTimeout(typeWriter,speed)
    }
}



var text1 ='REDEFINE YOUR EVERY MOVE'

function typeWriter1(){
    if(text1.length){
        document.getElementById("autotext1").innerHTML+=text1.charAt(j)
        j++;
        setTimeout(typeWriter1,speed)
    }
}

var a=0, b=0,c=0,d=0,e=0,f=0;
var price1='₹ 29,000/-'
var price2='₹ 9,000/-'
var price3='₹ 12,000/-'
var price4='₹ 17,500/-'
var price5='₹ 15,900/-'
var price6='₹ 18,600/-'


function priceH1(){
    if(price1.length){
        document.getElementById("card1").innerHTML+=price1.charAt(a)
        a++;
        setTimeout(priceH1,speed)
    }
}
function priceH2(){
    if(price2.length){
        document.getElementById("card2").innerHTML+=price2.charAt(b)
        b++;
        setTimeout(priceH2,speed)
    }
}
function priceH3(){
    if(price3.length){
        document.getElementById("card3").innerHTML+=price3.charAt(c)
        c++;
        setTimeout(priceH3,speed)
    }
}
function priceH4(){
    if(price4.length){
        document.getElementById("card4").innerHTML+=price4.charAt(d)
        d++;
        setTimeout(priceH4,speed)
    }
}
function priceH5(){
    if(price5.length){
        document.getElementById("card5").innerHTML+=price5.charAt(e)
        e++;
        setTimeout(priceH5,speed)
    }
}
function priceH6(){
    if(price6.length){
        document.getElementById("card6").innerHTML+=price6.charAt(f)
        f++;
        setTimeout(priceH6,speed)
    }
}