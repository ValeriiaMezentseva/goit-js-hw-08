// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "../../node_modules/simplelightbox/dist/simple-lightbox.min.css";

const container = document.querySelector(".gallery");

const createImagesGallery = (images) => {
    return images.map(({ preview, original, description }) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
           class ="gallery__image"
            src = "${preview}"
            data-source= "${original}"
            alt = "${description}"
            />
    </a>
</div>  `
    )
        .join('');
};
container.insertAdjacentHTML('beforeend', createImagesGallery(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

container.addEventListener('click', lightbox);
