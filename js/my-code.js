import images from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');

const imageContainer = createImageContainer(images);
galleryContainer.insertAdjacentHTML('afterbegin', imageContainer);
const modal = document.querySelector('.js-lightbox')
const modalImage = document.querySelector('.lightbox__image')
const closeButton = document.querySelector('.lightbox__button')
const overlayBox = document.querySelector('.lightbox__overlay')
console.log(overlayBox);



overlayBox.addEventListener('click', onClickButton);
galleryContainer.addEventListener('click', onClickImage)
closeButton.addEventListener('click', onClickButton);
window.addEventListener('keydown', clickHandle)
  
modal.classList.remove('is-open');


function onClickImage(e) {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return;
    }
 modal.classList.add('is-open');
    modalImage.src = e.target.dataset.source;
    modalImage.alt = e.target.alt;
    
}


function clickHandle(e) {
    if (e.code === "Escape") {
        modal.classList.remove('is-open');
        
    }
}


function createImageContainer(images) {
    return images.map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a
                class="gallery__link"
                href="${original}"
            >
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li >`
    }
    ).join('')
}






function onClickButton(e) {
   
    
    if (e.target.nodeName === closeButton) {
        return;
    }

    
     modal.classList.remove('is-open');
    modalImage.src = '';
    modalImage.alt = '';

}



 