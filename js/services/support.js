var getSupport = document.getElementsByClassName("support")[0];

window.addEventListener("scroll", setClassAnimation);
window.addEventListener("load", setClassAnimation);

function setClassAnimation(){
    if(getSupport.getBoundingClientRect().top < window.innerHeight) {
        getSupport.classList.add("showAnimation");
        getSupport.classList.add("showAnimation");
    }
}