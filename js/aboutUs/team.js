var getTeam = document.getElementsByClassName("team")[0];

window.addEventListener('scroll', addAnimation);
window.addEventListener('load', addAnimation);

function addAnimation() {
    if (getTeam.getBoundingClientRect().top < window.innerHeight) {
        getTeam.classList.add("showAnimation");
    }
}
