// @todo: Темплейт карточки
const placeCardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placeList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createPlaceCard(titleValue, imageSourceValue) {
  placeCardElement = placeCardTemplate.querySelector('.places__item').cloneNode(true);
  placeCardElement.querySelector('.card__title').textContent = titleValue;
  placeCardElement.querySelector('.card__image').src = imageSourceValue;
  placeCardElement.querySelector('.card__delete-button').addEventListener('click', removePlaceCard);
  return placeCardElement;
}

// @todo: Функция удаления карточки
function removePlaceCard(event) {
  event.target.parentElement.remove();
}

// @todo: Вывести карточки на страницу
function renderPlaceList() {
  let places = [];
  initialCards.forEach((item) => {
    places.push(createPlaceCard(item.name, item.link));
  });
  placeList.append(...places);
}

renderPlaceList();