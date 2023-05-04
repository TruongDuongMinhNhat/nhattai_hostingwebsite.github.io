var getFooter = document.getElementsByClassName("footer")[0];

window.addEventListener("scroll", setClassAnimation);
window.addEventListener("load", setClassAnimation);

function setClassAnimation(){
    if(getFooter.getBoundingClientRect().top < window.innerHeight) {
        getFooter.classList.add("showAnimation");
        getFooter.classList.add("showAnimation");
    }
}