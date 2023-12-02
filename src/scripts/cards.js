const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// @todo: Темплейт карточки
const placeCardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placeList = document.querySelector(".places__list");
const placeCardElement = placeCardTemplate.querySelector(".places__item");

// @todo: Функция создания карточки
export function createPlaceCard(
  titleValue,
  imageSourceValue,
  removeCardHandler
) {
  const element = placeCardElement.cloneNode(true);
  element.querySelector(".card__title").textContent = titleValue;
  element.querySelector(".card__image").src = imageSourceValue;
  element.querySelector(".card__image").alt = `На изображении ${titleValue}.`;
  element
    .querySelector(".card__delete-button")
    .addEventListener("click", removeCardHandler);
  return element;
}

// @todo: Функция удаления карточки
function removePlaceCard(event) {
  event.target.parentElement.remove();
}

// @todo: Вывести карточки на страницу
export function renderPlaceList() {
  initialCards.forEach((item) => {
    placeList.append(createPlaceCard(item.name, item.link, removePlaceCard));
  });
}
