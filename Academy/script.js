const imagesArray = document.getElementsByClassName('mobileImage');
const parent = document.getElementsByClassName('parent');
/*  Checking if used buttons to show box in mobile vertion and switch display to 'block' if resize higer than 540px  */
const queryCheck = (screenWidth) => {
  if (screenWidth >= 540) {
    Array.prototype.forEach.call(parent, element => {
      element.closest('.box').style.display = 'block';
    });
  } else {
    Array.prototype.forEach.call(parent, element => {
      element.closest('.box').style.display = 'none';
    });
  }
}
/*  Swaping images by changing src atribute if screen width lower than 912 px and back desktop images if resize back  */
const swapImage = (screenWidth) => {
  let srcImage = '';
    if (screenWidth <= 912) {
      Array.prototype.forEach.call(imagesArray, element => {
        srcImage = element.src;
        if (!srcImage.includes('-mobile')) {
          srcImage = String.raw`./` + srcImage.slice(srcImage.indexOf('media'), srcImage.indexOf('.jpg')) + '-mobile.jpg';
        }
        element.src = srcImage;
      });
    } else {
      Array.prototype.forEach.call(imagesArray, element => {
        srcImage = element.src;
        if (srcImage.includes('-mobile')) {
          srcImage = String.raw`./` + srcImage.slice(srcImage.indexOf('media'), srcImage.indexOf('-mobile')) + '.jpg';
        }
        element.src = srcImage;
      });
      }
}
/*  Call back function for resize, load event listener  */
const sizeListener = () => {
    let viewportWidth = window.innerWidth;
    queryCheck(viewportWidth);
    swapImage(viewportWidth);
}
/*  Event listener to check curent window width  */
'resize load'.split(' ').forEach(element => {
    window.addEventListener(element, sizeListener);
});  
/*  jQeury script for mobile vertion, to slide boxes on click  */
$(document).ready(() => {
  $('.button').on('click', event => {
    $(event.currentTarget).next('.box').slideToggle();
  });
});