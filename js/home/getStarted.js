var getTitle = document.getElementsByClassName("title")[0];
var getProgress = document.getElementsByClassName("progress")[0];
var getGetStarted = document.getElementsByClassName("getStarted")[0];

window.addEventListener("scroll", setClassAnimation);
window.addEventListener("load", setClassAnimation);

function setClassAnimation(){
    if(getGetStarted.getBoundingClientRect().top < window.innerHeight) {
        getTitle.classList.add("showAnimation");
        getProgress.classList.add("showAnimation");
    }
}