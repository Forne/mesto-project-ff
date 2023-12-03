import "../pages/index.css";

import { initialCards } from "../components/cards.js";
import { addPlaceCard } from "../components/card.js";
import { openModal, closeModal } from "../components/modal.js";

// Для форм
const editProfileForm = document.forms["edit-profile"];
const newPlaceForm = document.forms["new-place"];
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Для модальных окон
const profileButton = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector(".popup_type_edit");
const profileModalClose = profileModal.querySelector(".popup__close");
const placeButton = document.querySelector(".profile__add-button");
const placeModal = document.querySelector(".popup_type_new-card");
const placeModalClose = placeModal.querySelector(".popup__close");
const imageModal = document.querySelector(".popup_type_image");
const imageModalClose = imageModal.querySelector(".popup__close");

// Отображение начальных карточек
function renderPlaceList() {
  initialCards.forEach((item) => addPlaceCard(item.name, item.link));
}

// Обработчик формы профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = editProfileForm.elements["name"].value;
  profileDescription.textContent =
    editProfileForm.elements["description"].value;

  closeModal(profileModal);
}

// Обработчик формы создания места
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();

  const name = newPlaceForm.elements["place-name"].value;
  const link = newPlaceForm.elements["link"].value;
  addPlaceCard(name, link);

  newPlaceForm.reset();
  closeModal(placeModal);
}

// Выводим карточки
renderPlaceList();

// Добавляем обработку формы
newPlaceForm.addEventListener("submit", handlePlaceFormSubmit);
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

profileButton.addEventListener("click", () => {
  editProfileForm.elements["name"].value = profileTitle.textContent;
  editProfileForm.elements["description"].value =
    profileDescription.textContent;
  openModal(profileModal);
});

placeButton.addEventListener("click", () => {
  newPlaceForm.reset();
  openModal(placeModal);
});

// Закрытие модальных окон по кнопке
profileModalClose.addEventListener("click", () => {
  closeModal(profileModal);
});

placeModalClose.addEventListener("click", () => {
  closeModal(placeModal);
});

imageModalClose.addEventListener("click", () => {
  closeModal(imageModal);
});
