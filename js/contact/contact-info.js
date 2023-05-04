var getContactInfo = document.getElementsByClassName("contact-info")[0];

window.addEventListener("scroll", setClassAnimation);
window.addEventListener("load", setClassAnimation);

function setClassAnimation() {
  if (getContactInfo.getBoundingClientRect().top < window.innerHeight) {
    getContactInfo.classList.add("showAnimation");
    getContactInfo.classList.add("showAnimation");
  }
}

var getMap = document.getElementsByClassName("contact-map")[0];

window.addEventListener("scroll", setClassAnimation);
window.addEventListener("load", setClassAnimation);

function setClassAnimation() {
  if (getMap.getBoundingClientRect().top < window.innerHeight) {
    getMap.classList.add("showAnimation");
    getMap.classList.add("showAnimation");
  }
}