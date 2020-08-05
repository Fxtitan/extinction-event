/////SELECTORS////////////////////////////////
const ols = document.querySelectorAll('ol');

const uls = document.querySelectorAll('ul');

const images = document.querySelectorAll('img');

const button = document.querySelector('#destroy-all');
/////FUNCTIONS////////////////////////////////
for (const ol of ols) {
    ol.addEventListener('click', (event) => event.target.style.textDecoration = 'line-through');
}

for (const ul of uls) {
    ul.addEventListener('click', (event) => event.target.style.textDecoration = 'line-through');
    ul.addEventListener('click', (event) => event.target.style.opacity = '50%');
}

for (const img of images) {
    img.addEventListener('click', (event) => event.target.style.opacity = '50%');
}

const destroy = () => {
for (const ol of ols) {
    ol.style.textDecoration = 'line-through';
    ol.style.opacity = '0'
} for (const ul of uls) {
    ul.style.textDecoration = 'line-through';
    ul.style.opacity = '0';
} for (const img of images ) {
    img.style.width = '0';
}
}
button.addEventListener('click', destroy)


// button.parentNode.removeChild();
//idea... possible to store all variables into one variable??
//then do something like //allInOne.addEventListener('click', destroy)??


