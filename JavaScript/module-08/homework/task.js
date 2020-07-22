import gallery from './gallery.js';

// ==============select elements=============

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const imageRef = lightboxRef.querySelector('img');
const buttonCloseRef = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const overlayRef = document.querySelector('.lightbox__content');

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
    data-index="${image.index}"
  />
</a>
</li>`,
    )
    .join('');

  galleryRef.insertAdjacentHTML('afterbegin', pictureElements);
};

addPictures(gallery);

// =============functions================
let imageIndex;

const functionalKeys = event => {
  let arrayLength = gallery.length;
  let arrayElement;
  if (event.code === 'Escape') {
    closeModal();
  }
  if (event.code === 'ArrowRight') {
    // if (arrayElement === arrayLength) {
    //   arrayElement = gallery.find(image => Number(image.index) === 0);
    //   console.log(arrayElement);
    //   imageRef.setAttribute('src', arrayElement.original);
    // }
    arrayElement = gallery.find(
      image => Number(image.index) === imageIndex + 1,
    );
    imageRef.setAttribute('src', arrayElement.original);
    imageIndex += 1;
    console.log(arrayLength);
  }
  if (event.code === 'ArrowLeft') {
    arrayElement = gallery.find(
      image => Number(image.index) === imageIndex - 1,
    );
    imageRef.setAttribute('src', arrayElement.original);
    imageIndex -= 1;
  }
};

const openModal = event => {
  window.addEventListener('keydown', functionalKeys);
  const imageUrl = event.target.dataset.source;
  imageIndex = Number(event.target.dataset.index);
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  imageRef.setAttribute('src', imageUrl);
  lightboxRef.classList.add('is-open');
};

const closeModal = () => {
  window.removeEventListener('keydown', functionalKeys);
  lightboxRef.classList.remove('is-open');
  imageRef.setAttribute('src', '');
};

const overlayClickClose = event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

// ==================listeners===================

galleryRef.addEventListener('click', openModal);
buttonCloseRef.addEventListener('click', closeModal);
overlayRef.addEventListener('click', overlayClickClose);
