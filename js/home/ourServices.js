var getServices = document.getElementsByClassName("ourServices")[0];

window.addEventListener('scroll', addAnimation);
window.addEventListener('load', addAnimation);

function addAnimation() {
    if(getServices.getBoundingClientRect().top < window.innerHeight) {
        getServices.classList.add("showAnimation");
    }
}
