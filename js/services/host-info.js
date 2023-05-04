/* Animation */
var getHostInfo = document.getElementsByClassName("host-info")[0];

window.addEventListener("scroll", setClassAnimation);
window.addEventListener("load", setClassAnimation);

function setClassAnimation(){
    if(getHostInfo.getBoundingClientRect().top < window.innerHeight) {
        getHostInfo.classList.add("showAnimation");
        getHostInfo.classList.add("showAnimation");
    }
}

/* Event */
var getTabsDescribe = document.getElementsByClassName('tabs-container')[0]
var getTabsTitle = document.getElementsByClassName('tabs-title')[0]
var getListItem = document.getElementsByClassName('tabs-list')[0].getElementsByTagName('li')

for (var i = 0; i < getListItem.length; i++) {
    (function(index) {
        getListItem[index].addEventListener('click', function(e) {
            var getText = getListItem[index].innerText;
            if (getTabsTitle.innerText != getText) {
                getTabsTitle.innerText = getText;
                
                if (!getTabsDescribe.classList.contains('showAnimation')) {
                    getTabsDescribe.classList.add('showAnimation');
                } else {
                    getTabsDescribe.classList.remove('showAnimation');
                    setTimeout(function(){
                        getTabsDescribe.classList.add('showAnimation');
                    }, 10)
                }

                for(var k = 0; k < getListItem.length; ++k){
                    (function(key){
                        if(getListItem[key].classList.contains('host-info--choosen')){
                            getListItem[key].classList.remove('host-info--choosen')
                        }
                    })(k);
                }
                getListItem[index].classList.add('host-info--choosen')
            }
        });
    })(i);
}
