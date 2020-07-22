import gallery from './gallery.js';

// ==============select elements=============

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const imageRef = lightboxRef.querySelector('img');
const buttonCloseRef = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const overlayRef = lightboxRef.querySelector('.lightbox__overlay');

// ===============build list of images=============

const addPictures = images => {
  const pictureElements = images
    .map(
      image => `<li class="gallery__item">
<a
  class="gallery__link"
  href="${image.original}"
>
  <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
  />
</a>
</li>`,
    )
    .join('');

  galleryRef.insertAdjacentHTML('afterbegin', pictureElements);
};

addPictures(gallery);

// =============functions================

const openModal = event => {
  const imageUrl = event.target.dataset.source;
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    console.log(event.target.src);
    imageRef.setAttribute('src', imageUrl);
    lightboxRef.classList.add('is-open');
  }
};

const closeModal = event => {
  lightboxRef.classList.remove('is-open');
  imageRef.setAttribute('src', '');
};

const overlayClose = event => {
  console.log(event.target);
  console.log(event.currentTarget);
};

// ==================listeners===================

galleryRef.addEventListener('click', openModal);
buttonCloseRef.addEventListener('click', closeModal);
overlayRef.addEventListener('click', overlayClose);
