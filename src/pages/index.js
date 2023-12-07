import "../pages/index.css";

import {
  createCard,
  getCards,
  getProfile,
  updateAvatar,
  updateProfile,
} from "../components/api.js";
import { addPlaceCard } from "../components/card.js";
import { openModal, closeModal } from "../components/modal.js";
import { clearValidation, enableValidation } from "../components/validation.js";

// Валидация
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input__error-active",
});

// Для форм
const editProfileForm = document.forms["edit-profile"];
const newPlaceForm = document.forms["new-place"];
const updateAvatarForm = document.forms["update-avatar"];
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImageContainer = document.querySelector(".profile__image");
const profileImage = document.querySelector(".profile__image__img");

// Для модальных окон
const profileButton = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector(".popup_type_edit");
const profileFormButton = profileModal.querySelector(".popup__button");
const placeButton = document.querySelector(".profile__add-button");
const placeModal = document.querySelector(".popup_type_new-card");
const placeFormButton = placeModal.querySelector(".popup__button");
const avatarModal = document.querySelector(".popup_type_avatar");
const avatarFormButton = avatarModal.querySelector(".popup__button");

// Отображение начальных карточек
function render() {
  Promise.all([getProfile(), getCards()])
    .then((res) => {
      profileTitle.textContent = res[0].name;
      profileDescription.textContent = res[0].about;
      profileImage.src = res[0].avatar;
      res[1].forEach((item) => {
        item.isOwner = res[0]._id === item.owner._id;
        item.isLiked = item.likes.some((like) => like._id === res[0]._id);
      });
      //console.log(res[0]);
      res[1].forEach((card) => addPlaceCard(card));
    })
    .catch((err) => console.log(err));
}

render();

// Обработчик формы профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileFormButton.textContent = "Сохранение...";
  const name = editProfileForm.elements["name"].value;
  const about = editProfileForm.elements["description"].value;
  updateProfile(name, about)
    .then((res) => {
      profileTitle.textContent = res.name;
      profileDescription.textContent = res.about;
      closeModal(profileModal);
    })
    .catch((err) => console.log(err))
    .finally(() => (profileFormButton.textContent = "Сохранить"));
}

// Обработчик формы аватарки
function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  avatarFormButton.textContent = "Сохранение...";
  const link = updateAvatarForm.elements["link"].value;
  updateAvatar(link)
    .then((res) => {
      profileImage.src = res.avatar;
      closeModal(avatarModal);
    })
    .catch((err) => console.log(err))
    .finally(() => (avatarFormButton.textContent = "Сохранить"));
}

// Обработчик формы создания места
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  placeFormButton.textContent = "Сохранение...";
  const name = newPlaceForm.elements["place-name"].value;
  const link = newPlaceForm.elements["link"].value;
  createCard(name, link)
    .then((res) => {
      res.isOwner = true;
      addPlaceCard(res);
      newPlaceForm.reset();
      closeModal(placeModal);
    })
    .catch((err) => console.log(err))
    .finally(() => (placeFormButton.textContent = "Создать"));
}

// Добавляем обработку формы
newPlaceForm.addEventListener("submit", handlePlaceFormSubmit);
editProfileForm.addEventListener("submit", handleProfileFormSubmit);
updateAvatarForm.addEventListener("submit", handleAvatarFormSubmit);

// Обработка элементов для открытия модальных окон
profileButton.addEventListener("click", () => {
  editProfileForm.elements["name"].value = profileTitle.textContent;
  editProfileForm.elements["description"].value =
    profileDescription.textContent;
  clearValidation(editProfileForm);
  openModal(profileModal);
});

placeButton.addEventListener("click", () => {
  newPlaceForm.reset();
  clearValidation(newPlaceForm);
  openModal(placeModal);
});

profileImageContainer.addEventListener("click", () => {
  updateAvatarForm.reset();
  clearValidation(updateAvatarForm);
  openModal(avatarModal);
});

// Закрытие модальных окон по кнопке
document.querySelectorAll(".popup__close").forEach((button) => {
  const buttonPopup = button.closest(".popup");
  button.addEventListener("click", () => closeModal(buttonPopup));
});
