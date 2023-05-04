var getCertificate = document.getElementsByClassName("certi")[0];

window.addEventListener('scroll', addAnimation);
window.addEventListener('load', addAnimation);

function addAnimation() {
    if(getCertificate.getBoundingClientRect().top < window.innerHeight) {
        getCertificate.classList.add("showAnimation");
    }
}
