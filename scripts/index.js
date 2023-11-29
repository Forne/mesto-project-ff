// @todo: Темплейт карточки
const placeCardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placeList = document.querySelector('.places__list');
const placeCardElement = placeCardTemplate.querySelector('.places__item');

// @todo: Функция создания карточки
function createPlaceCard(titleValue, imageSourceValue, removeCardHandler) {
  const element = placeCardElement.cloneNode(true);
  element.querySelector('.card__title').textContent = titleValue;
  element.querySelector('.card__image').src = imageSourceValue;
  element.querySelector('.card__image').alt = `На изображении ${titleValue}.`;
  element.querySelector('.card__delete-button').addEventListener('click', removeCardHandler);
  return element;
}

// @todo: Функция удаления карточки
function removePlaceCard(event) {
  event.target.parentElement.remove();
}

// @todo: Вывести карточки на страницу
function renderPlaceList() {
  initialCards.forEach((item) => {
    placeList.append(createPlaceCard(item.name, item.link, removePlaceCard));
  });
}

renderPlaceList();