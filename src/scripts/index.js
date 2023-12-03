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
const placeButton = document.querySelector(".profile__add-button");
const placeModal = document.querySelector(".popup_type_new-card");
const placesList = document.querySelector(".places__list");
const imageModal = document.querySelector(".popup_type_image");
const imageElement = imageModal.querySelector(".popup__image");

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

  closeModal();
}

// Обработчик формы создания места
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();

  const name = newPlaceForm.elements["place-name"].value;
  const link = newPlaceForm.elements["link"].value;
  addPlaceCard(name, link);

  newPlaceForm.reset();
  closeModal();
}

function initForm() {
  newPlaceForm.addEventListener("submit", handlePlaceFormSubmit);
  editProfileForm.addEventListener("submit", handleProfileFormSubmit);
  editProfileForm.elements["name"].value = profileTitle.textContent;
  editProfileForm.elements["description"].value =
    profileDescription.textContent;
}

function initModal() {
  profileButton.addEventListener("click", () => {
    openModal(profileModal);
  });

  placeButton.addEventListener("click", () => {
    newPlaceForm.reset();
    openModal(placeModal);
  });

  placesList.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("card__image")) {
      imageElement.src = evt.target.src;
      imageElement.alt = evt.target.alt;
      openModal(imageModal);
    }
  });
}

renderPlaceList();
initForm();
initModal();