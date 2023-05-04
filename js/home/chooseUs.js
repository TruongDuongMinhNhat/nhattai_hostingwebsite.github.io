var getChooseUs = document.getElementsByClassName("chooseUs")[0];


window.addEventListener("scroll", setClassAnimation);
window.addEventListener("load", setClassAnimation);

function setClassAnimation(){
    if(getChooseUs.getBoundingClientRect().top < window.innerHeight) {
        getChooseUs.classList.add("showAnimation");
        getChooseUs.classList.add("showAnimation");
    }
}