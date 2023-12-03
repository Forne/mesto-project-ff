
// Темплейт карточки
const placeCardTemplate = document.querySelector("#card-template").content;

// DOM узлы
const placeList = document.querySelector(".places__list");
const placeCardElement = placeCardTemplate.querySelector(".places__item");

// @todo: Функция создания карточки
function createPlaceCard(
  titleValue,
  imageSourceValue,
  removeCardHandler,
  likeCardHandler
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

  return element;
}

export function addPlaceCard(name, link) {
  placeList.prepend(createPlaceCard(name, link, removePlaceCard, like));
}

// Функция удаления карточки
function removePlaceCard(event) {
  event.target.parentElement.remove();
}

// Функция лайка
function like(evt) {
  // if (evt.target.classList.contains('card__like-button')) {
  evt.target.classList.toggle("card__like-button_is-active");
  // }
}
// placeList.addEventListener('click', like);