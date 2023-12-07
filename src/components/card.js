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
  const likeButton = element.querySelector(".card__like-button");
  const likeCount = element.querySelector(".card__like-count");

  image.src = card.link;
  image.alt = `На изображении ${card.name}.`;

  likeCount.textContent = card.likes.length;

  // Удаление кнопки если не владелец
  const button = element.querySelector(".card__delete-button");
  if (card.isOwner) {
    button.addEventListener("click", () =>
      removeCardHandler(card._id, element)
    );
  } else {
    button.remove();
  }

  // Проверка на лайк
  if (card.isLiked) {
    likeButton.classList.add("card__like-button_is-active");
  }

  likeButton.addEventListener("click", () =>
    likeCardHandler(card._id, likeCount, likeButton)
  );

  image.addEventListener("click", () => popupCardHandler(card.name, card.link));

  return element;
}

// Внешняя функция добовления карточки
export function addPlaceCard(card) {
  placeList.prepend(
    createPlaceCard(card, removePlaceCard, likeHandler, popupHandler)
  );
}

// Обработчик удаления карточки
function removePlaceCard(id, element) {
  // element.remove();
  removeCard(id)
    .then(() => {
      element.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

// Обработчик лайка
function likeHandler(id, count, button) {
  const isLiked = button.classList.contains("card__like-button_is-active");
  if (isLiked) {
    unlikeCard(id)
      .then((res) => {
        button.classList.remove("card__like-button_is-active");
        count.textContent = res.likes.length;
      })
      .catch((err) => console.log(err));
  } else {
    likeCard(id)
      .then((res) => {
        button.classList.add("card__like-button_is-active");
        count.textContent = res.likes.length;
      })
      .catch((err) => console.log(err));
  }
}

// Обработчик popup
function popupHandler(name, link) {
  imageModalImage.src = link;
  imageModalImage.alt = name;
  imageModalCaption.textContent = name;
  openModal(imageModal);
}
