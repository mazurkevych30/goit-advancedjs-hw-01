// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import createMarkupIL from '../templates/createMarkupIL';

console.log(galleryItems);

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("afterbegin", createMarkupIL(galleryItems));
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});




