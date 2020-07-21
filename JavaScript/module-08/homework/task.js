import gallery from './gallery.js';

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');

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

const openModal = event => {
  const imageRef = lightboxRef.querySelector('img');
  const imageUrl = event.target.dataset.source;
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    console.log(event.target.src);
    imageRef.setAttribute('src', imageUrl);
    lightboxRef.classList.add('is-open');
  }
};

galleryRef.addEventListener('click', openModal);
