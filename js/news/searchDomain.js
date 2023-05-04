var getDomainSelected = document.getElementsByClassName('domain-name')[0];
var getListDomain = document.getElementById('domain-name-js');

getDomainSelected.addEventListener('click', function (e) {
    if (getListDomain.style.display == 'none') {
        getListDomain.style.display = 'block';
    } else {
        getListDomain.style.display = 'none';
    }
});

var getListDomainName = getListDomain.getElementsByTagName("li");
for (let i = 0; i < getListDomainName.length; ++i) {
    getListDomainName[i].addEventListener('click', function(e) {
        var getSpanTag = getDomainSelected.getElementsByTagName("span");
        getSpanTag[0].innerText = getListDomainName[i].textContent;
        getListDomain.style.display = 'none';
    })
}