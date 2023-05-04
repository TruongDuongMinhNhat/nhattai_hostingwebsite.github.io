var getPack = document.getElementsByClassName("list-pack")[0];

window.addEventListener('scroll', addAnimation);
window.addEventListener('load', addAnimation);

function addAnimation() {
    if(getPack.getBoundingClientRect().top < window.innerHeight) {
        getPack.classList.add("showAnimation");
    }
}
