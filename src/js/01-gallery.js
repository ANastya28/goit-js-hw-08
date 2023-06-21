import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const makeHtmlGallary = ({ preview, original, description }) => {
  return `<li class="gallery__item">
            <a class="gallery__image" href="${original}">
               <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
               />
            </a>
        </li>`
}

const gallery = galleryItems.map(makeHtmlGallary).join("");

const galleryList = document.querySelector(`.gallery`);
galleryList.insertAdjacentHTML("beforeend", gallery);

const lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt', captionPosition: "bottom", });
//    // console.log(lightbox);