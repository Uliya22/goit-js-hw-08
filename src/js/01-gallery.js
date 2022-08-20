// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')

const galleryMarkup = createGalleryItem(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onPreventDefault);

function createGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
         return `
        <li class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `
    }).join('');

}
function onPreventDefault(evt) {
    evt.preventDefault();
}

 new SimpleLightbox('.gallery__item a', {captionsData: 'alt', captionDelay: 250 });
    