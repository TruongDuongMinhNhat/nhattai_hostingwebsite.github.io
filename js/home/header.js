var getHeader = document.getElementsByClassName("header")[0];

window.addEventListener('scroll', changSizeHeader);
window.addEventListener('load', changSizeHeader);

function changSizeHeader(){
    if(this.window.scrollY > 30) {
        getHeader.classList.add("header--smaller");
        getHeader.classList.remove("header--bigger");   
        getHeader.style.height = (84 + "px");
        getHeader.style.backgroundColor = "rgb(32,14,53)";
    } else {
        getHeader.classList.add("header--bigger");
        getHeader.classList.remove("header--smaller");
        getHeader.style.height = (124 + "px");
        getHeader.style.backgroundColor = "transparent";
    }
}