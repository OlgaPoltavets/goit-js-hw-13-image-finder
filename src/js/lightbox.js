import * as basicLightbox from 'basiclightbox';
import loadingImgUrl from '../images/loading.gif';

const LoadingImgPath = `<img src="./images/jpg.jpg" width="400" height="400"></img>`;

const loadingPlaceholder = basicLightbox.create(
  `<img src="${loadingImgUrl}"/>`,
);

function bigImg(data) {
  return basicLightbox.create(`<img src="${data}"/>`);
}

export default { loadingPlaceholder, bigImg };
