let currentModal;
let currentModalClose;

export function openModal(modal) {
  currentModal = modal;
  currentModalClose = currentModal.querySelector(".popup__close");

  currentModal.classList.add("popup_is-opened");

  currentModalClose.addEventListener("click", handleButton);
  document.addEventListener("keydown", handleKeyboard);
  currentModal.addEventListener("click", handleOverlay);
}

export function closeModal() {
  currentModal.classList.remove("popup_is-opened");
  currentModalClose.removeEventListener("click", handleButton);
  document.removeEventListener("keydown", handleKeyboard);
  currentModal.removeEventListener("click", handleOverlay);
}

function handleButton() {
  closeModal();
}

function handleKeyboard(evt) {
  if (evt.key === "Escape") {
    closeModal();
  }
}

function handleOverlay(evt) {
  if (evt.target === currentModal) {
    closeModal();
  }
}
