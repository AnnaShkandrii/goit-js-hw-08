// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const newGalleryItems = galleryItems
  .map(
    (image) =>
      `<li class=gallery__item>
         <a class=gallery__link href=${image.original}>
           <img class=gallery__image src=${image.preview} alt='${image.description}'></img>
         </a>
      </li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", newGalleryItems);


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const onEscPress = (event, instance) => {
  if (event.code === "Escape") {
    instance.close();
  }
};

console.log(galleryItems);
