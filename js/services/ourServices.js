var getServices = document.getElementsByClassName("ourServices")[0];

window.addEventListener("scroll", setClassAnimation);
window.addEventListener("load", setClassAnimation);

function setClassAnimation(){
    if(getServices.getBoundingClientRect().top < window.innerHeight) {
        getServices.classList.add("showAnimation");
        getServices.classList.add("showAnimation");
    }
}