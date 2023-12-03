import { openModal } from "../components/modal.js";

// Темплейт карточки
const placeCardTemplate = document.querySelector("#card-template").content;

// DOM узлы
const placeList = document.querySelector(".places__list");
const placeCardElement = placeCardTemplate.querySelector(".places__item");
const imageModal = document.querySelector(".popup_type_image");
const imageModalImage = imageModal.querySelector(".popup__image");
const imageModalCaption = imageModal.querySelector(".popup__caption");

// Функция создания карточки
function createPlaceCard(
  titleValue,
  imageSourceValue,
  removeCardHandler,
  likeCardHandler,
  popupCardHandler
) {
  const element = placeCardElement.cloneNode(true);
  element.querySelector(".card__title").textContent = titleValue;

  const image = element.querySelector(".card__image");
  image.src = imageSourceValue;
  image.alt = `На изображении ${titleValue}.`;

  element
    .querySelector(".card__delete-button")
    .addEventListener("click", removeCardHandler);

  element
    .querySelector(".card__like-button")
    .addEventListener("click", likeCardHandler);

  element
    .querySelector(".card__image")
    .addEventListener("click", popupCardHandler);

  return element;
}

export function addPlaceCard(name, link) {
  placeList.prepend(
    createPlaceCard(name, link, removePlaceCard, likeHandler, popupHandler)
  );
}

// Обработчик удаления карточки
function removePlaceCard(event) {
  event.target.parentElement.remove();
}

// Обработчик лайка
function likeHandler(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

// Обработчик popup
function popupHandler(evt) {
  imageModalImage.src = evt.target.src;
  imageModalImage.alt = evt.target.alt;
  imageModalCaption.textContent = evt.target.alt;
  openModal(imageModal);
}
