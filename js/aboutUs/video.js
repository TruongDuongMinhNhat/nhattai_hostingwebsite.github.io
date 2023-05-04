var getVideo = document.getElementsByClassName("video")[0];

window.addEventListener('scroll', addAnimation);
window.addEventListener('load', addAnimation);

function addAnimation() {
    var getDivTag = getVideo.getElementsByTagName("div")[0];
    if(getVideo.getBoundingClientRect().top < window.innerHeight) {
        getDivTag.classList.add("showAnimation");
    }
}
