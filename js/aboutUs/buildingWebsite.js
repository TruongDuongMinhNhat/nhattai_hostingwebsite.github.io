var getBuilding = document.getElementsByClassName("building-container")[0];

window.addEventListener("scroll", setClassAnimation);
window.addEventListener("load", setClassAnimation);

function setClassAnimation(){
    if(getBuilding.getBoundingClientRect().top < window.innerHeight) {
        getBuilding.classList.add("showAnimation");
        getBuilding.classList.add("showAnimation");
    }
}