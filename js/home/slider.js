var getText = document.getElementById("domain-show-js");
var getDomainButton = document.getElementById("domain-js");
var getListDomain = document.getElementsByClassName("domain-name-js");

getDomainButton.addEventListener("click", domainButtonClick);

/**
 * Sự kiện khi người dùng click vào chọn đuôi tên miền
 * @param {*} e 
 */
function domainButtonClick(e) {
    const getShowListDomain = document.getElementById("domain-list_domain-js");
    if(getShowListDomain.className.match("display-hide")) {
        getShowListDomain.classList.remove("display-hide");
        getShowListDomain.classList.add("display-show");
    } else {
        getShowListDomain.classList.add("display-hide");
        getShowListDomain.classList.remove("display-show");
    }
}

for(i = 0; i < getListDomain.length; i++) {
    getListDomain[i].addEventListener("click", (e) => {
        getText.innerText = e.target.innerHTML;
    });
}

//Thực hiện lặp vòng lặp vô hạn cho những đám mây
const getCloud = document.getElementsByClassName("cloud")[0];
var style = window.getComputedStyle(getCloud);
var number = parseInt(style.getPropertyValue('left'));
setInterval(function() {
    number += 1;
    getCloud.style.left = (number + "px");
    if(window.innerWidth < number){
        number = -200;
        getCloud.style.top = (Math.floor(Math.random() * (170 - 150)) + 150 + "px");
        getCloud.style.zIndex = (Math.random() * 3 - 0) + 0;
    }
}, 17)

const getCloud1 = document.getElementsByClassName("cloud1")[0];
var style1 = window.getComputedStyle(getCloud1);
var number1 = parseInt(style1.getPropertyValue('left'));
setInterval(function() {
    getCloud1.style.left = (number1 + "px");
    number1 += 1; 
    if(window.innerWidth < number1){
        number1 = -200;
        getCloud1.style.top = (Math.floor(Math.random() * (230 - 200)) + 200 + "px");
        getCloud1.style.zIndex = (Math.random() * 3 - 0) + 0;
    }
}, 17)

const getCloud2 = document.getElementsByClassName("cloud2")[0];
var style2= window.getComputedStyle(getCloud2);
var number2 = parseInt(style2.getPropertyValue('left'));
setInterval(function() {
    getCloud2.style.left = (number2 + "px");
    number2 += 1; 
    if(window.innerWidth < number2){
        number2 = -200;
        getCloud2.style.top = (Math.floor(Math.random() * (280 - 260)) + 260 + "px");
        getCloud2.style.zIndex = (Math.random() * 3 - 0) + 0;
    }
}, 17)

const getCloud3 = document.getElementsByClassName("cloud3")[0];
var style3 = window.getComputedStyle(getCloud3);
var number3 = parseInt(style3.getPropertyValue('left'));
setInterval(function() {
    getCloud3.style.left = (number3 + "px");
    number3 += 1; 
    if(window.innerWidth < number3){
        number3 = -200;
        getCloud3.style.top = (Math.floor(Math.random() * (330 - 310)) + 310 + "px");
        getCloud3.style.zIndex = (Math.floor(Math.random() * (4 - 0)) + 0);
    }
}, 17)