// Add imports above this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// console.log(simpleLightbox);
// Change code below this line
const divElParent = document.querySelector('.gallery');

function makeItemEls () {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`;
        })
        .join("");
}

const ImgItems = makeItemEls(galleryItems);
divElParent.insertAdjacentHTML('beforeend', ImgItems);
divElParent.addEventListener('click', onDivElParentClick);

function onDivElParentClick (event) {
    event.preventDefault();
    
    if (event.target.classList.contains('gallery')) {
        return;
    }
}

let gallery = new SimpleLightbox('.gallery a',
{
	captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);