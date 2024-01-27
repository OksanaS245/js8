const links = document.querySelectorAll('a');
const newAttributes = ['Google', 'Yandex', 'Yahoo', 'Twitter', 'Amazon'];

links.forEach(function (link, index) {
    link.setAttribute('data-index', newAttributes[index]);
    link.addEventListener('click', function (event) {
        let nameOfSite = link.getAttribute('data-index');
        console.log('Customer clicked on link "' + nameOfSite + '"');
    });
});
