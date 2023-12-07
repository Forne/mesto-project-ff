const config = {
  baseUrl: "https://nomoreparties.co/v1/cohort-magistr-2",
  headers: {
    authorization: "2fbbfedf-b1b4-413e-af11-8215121260bb",
    "Content-Type": "application/json",
  },
};

const apiRequest = (url, method = "GET", body) => {
  return fetch(`${config.baseUrl}/${url}`, {
    method: method,
    headers: config.headers,
    body: body,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

// Профиль
export const getProfile = () => apiRequest("users/me");

export const updateProfile = (name, about) =>
  apiRequest("users/me", "PATCH", JSON.stringify({ name, about }));

export const updateAvatar = (avatar) =>
  apiRequest("users/me/avatar", "PATCH", JSON.stringify({ avatar }));

// Карточки
export const getCards = () => apiRequest("cards");

export const createCard = (name, link) =>
  apiRequest("cards", "POST", JSON.stringify({ name, link }));

export const removeCard = (id) => apiRequest(`cards/${id}`, "DELETE");

// Лайки
export const likeCard = (id) => apiRequest(`cards/likes/${id}`, "PUT");

export const unlikeCard = (id) => apiRequest(`cards/likes/${id}`, "DELETE");
