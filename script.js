const imagesArray = document.getElementsByClassName('galery-image');
const description = document.getElementsByClassName('description');
const fullImage = document.getElementsByClassName('full-image');
const fullScrean = document.getElementsByClassName('hidden');
const closeButton = document.getElementById('back');
const menuButton = document.getElementsByClassName('menu');
const navList = document.getElementsByClassName('nav-list');

let mediaQuery = window.matchMedia('(pointer: fine)');
if (mediaQuery.matches) {
    Array.prototype.forEach.call(imagesArray, (element, index) => {
        element.addEventListener('mouseover', () => {
            description[index].style.top = '0';
        });
        element.addEventListener('mouseout', () => {
            description[index].style.top = '-50%';
        });
});
}

// Mobile nav menu

menuButton[0].addEventListener('click', () => {
    if (navList[0].style.top === '71px') {
        navList[0].style.top = '-90px';
    } else {
        navList[0].style.top = '71px';
        Array.prototype.forEach.call(navList[0].children, (element) => {
            element.addEventListener('click', () => {
                navList[0].style.top = '-90px';
            }); 
        });
    }
});

// Geting atributes to set Full Image

Array.prototype.forEach.call(imagesArray, (element) => {
    element.addEventListener('click', (event) => {
        let srcString = event.target.src;
        srcString = srcString.slice(srcString.indexOf('img'), srcString.indexOf('.png')).replace('%20', ' ') + '_large.png';
        const altString = event.target.alt;
        fullImage[0].src = srcString;
        fullImage[0].alt = altString;
        fullScrean[0].style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    fullScrean[0].style.display = 'none';
});
