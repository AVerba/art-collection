
document.addEventListener('DOMContentLoaded', function () {

  let gallery = document.querySelector('.gallery__list');
  let masonry = new Masonry(gallery, {
    itemSelector: '.gallery__item',
    fitWidth: true,
    firHeight:true
  });

  imagesLoaded(gallery, function () {
    masonry.layout();
  });
});