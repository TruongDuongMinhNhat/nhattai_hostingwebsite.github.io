//Thực hiện lặp vòng lặp vô hạn cho những đám mây
const getCloud = document.getElementsByClassName("cloud1")[0];
var style = window.getComputedStyle(getCloud);
var number = parseInt(style.getPropertyValue('left'));
setInterval(function() {
    number += 1;
    getCloud.style.left = (number + "px");
    if(window.innerWidth < number){
        number = -200;
        getCloud.style.top = (Math.floor(Math.random() * (100 - 50)) + 50 + "px");
    }
}, 17)

const getCloud1 = document.getElementsByClassName("cloud2")[0];
var style1 = window.getComputedStyle(getCloud1);
var number1 = parseInt(style1.getPropertyValue('left'));
setInterval(function() {
    getCloud1.style.left = (number1 + "px");
    number1 += 1; 
    if(window.innerWidth < number1){
        number1 = -200;
        getCloud1.style.top = (Math.floor(Math.random() * (325 - 200)) + 200 + "px");
    }
}, 17)

const getCloud2 = document.getElementsByClassName("cloud3")[0];
var style2= window.getComputedStyle(getCloud2);
var number2 = parseInt(style2.getPropertyValue('left'));
setInterval(function() {
    getCloud2.style.left = (number2 + "px");
    number2 += 1; 
    if(window.innerWidth < number2){
        number2 = -200;
        getCloud2.style.top = (Math.floor(Math.random() * (200 - 150)) + 150 + "px");
        getCloud2.style.zIndex = (Math.random() * 3 - 0) + 0;
    }
}, 17)