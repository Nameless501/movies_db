import posterFallback from '../images/poster_fallback.png';
import avatarFallback from '../images/icon_photo_fallback.png';

export function getRandomElement(arr) {
    const index = Math.floor(Math.random() * (arr.length - 1));
    return arr[index];
}

export function handlePosterFetchError(evt) {
    evt.target.src = posterFallback;
}

export function handleAvatarFetchError(evt) {
    evt.target.src = avatarFallback;
}