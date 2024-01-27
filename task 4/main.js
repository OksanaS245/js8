const btn = document.querySelector('button');
const div = document.querySelector('div');

function unhide () {
    div.style.display = 'block';
    };

btn.addEventListener('click', unhide)