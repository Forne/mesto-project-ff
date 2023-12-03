export function openModal(modal) {
  modal.classList.add("popup_is-opened");

  document.addEventListener("keydown", handleKeyboard);
  modal.addEventListener("click", handleOverlay);
}

export function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleKeyboard);
  modal.removeEventListener("click", handleOverlay);
}

function handleKeyboard(evt) {
  if (evt.key === "Escape") {
    let modal = document.querySelector(".popup_is-opened");
    closeModal(modal);
  }
}

function handleOverlay(evt) {
  let modal = document.querySelector(".popup_is-opened");
  if (evt.target === modal) {
    closeModal(modal);
  }
}
