import { openModal } from "../components/modal.js";
import { likeCard, removeCard, unlikeCard } from "../components/api.js";

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
  card,
  removeCardHandler,
  likeCardHandler,
  popupCardHandler
) {
  const element = placeCardElement.cloneNode(true);
  element.querySelector(".card__title").textContent = card.name;

  const image = element.querySelector(".card__image");
  image.src = card.link;
  image.alt = `На изображении ${card.name}.`;

  element.dataset.id = card._id;

  // Проверка на лайк
  if (card.isLiked) {
    const like = element.querySelector(".card__like-button");
    like.classList.add("card__like-button_is-active");
  }

  element.querySelector(".card__like-count").textContent = card.likes.length;

  // Удаление кнопки если не владелец
  const button = element.querySelector(".card__delete-button");
  if (card.isOwner) {
    button.addEventListener("click", removeCardHandler);
  } else {
    button.remove();
  }

  element
    .querySelector(".card__like-button")
    .addEventListener("click", likeCardHandler);

  element
    .querySelector(".card__image")
    .addEventListener("click", popupCardHandler);

  return element;
}

// Внешний функция добовления карточки
export function addPlaceCard(card) {
  placeList.prepend(
    createPlaceCard(card, removePlaceCard, likeHandler, popupHandler)
  );
}

// Обработчик удаления карточки
function removePlaceCard(evt) {
  const cardId = evt.target.parentElement.dataset.id;
  removeCard(cardId)
    .then(() => {
      evt.target.parentElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

// Обработчик лайка
function likeHandler(evt) {
  const cardId =
    evt.target.parentElement.parentElement.parentElement.dataset.id;
  const isLiked = evt.target.classList.contains("card__like-button_is-active");
  const count = evt.target.parentElement.querySelector(".card__like-count");
  if (isLiked) {
    unlikeCard(cardId)
      .then((res) => {
        evt.target.classList.remove("card__like-button_is-active");
        console.log(res.likes);
        count.textContent = res.likes.length;
      })
      .catch((err) => console.log(err));
  } else {
    likeCard(cardId)
      .then((res) => {
        evt.target.classList.add("card__like-button_is-active");
        count.textContent = res.likes.length;
      })
      .catch((err) => console.log(err));
  }
}

// Обработчик popup
function popupHandler(evt) {
  imageModalImage.src = evt.target.src;
  imageModalImage.alt = evt.target.alt;
  imageModalCaption.textContent = evt.target.alt;
  openModal(imageModal);
}
