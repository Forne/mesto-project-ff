(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/cohort-magistr-2",headers:{authorization:"2fbbfedf-b1b4-413e-af11-8215121260bb","Content-Type":"application/json"}},t=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",o=arguments.length>2?arguments[2]:void 0;return fetch("".concat(e.baseUrl,"/").concat(t),{method:n,headers:e.headers,body:o}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))},n=function(e){return t("cards/".concat(e),"DELETE")},o=function(e){return t("cards/likes/".concat(e),"PUT")},r=function(e){return t("cards/likes/".concat(e),"DELETE")};function c(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",u),e.addEventListener("click",a)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u),e.removeEventListener("click",a)}function u(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}function a(e){var t=document.querySelector(".popup_is-opened");e.target===t&&i(t)}var l=document.querySelector("#card-template").content,s=document.querySelector(".places__list"),d=l.querySelector(".places__item"),p=document.querySelector(".popup_type_image"),f=p.querySelector(".popup__image"),_=p.querySelector(".popup__caption");function m(e){s.prepend(function(e,t,n,o){var r=d.cloneNode(!0);r.querySelector(".card__title").textContent=e.name;var c=r.querySelector(".card__image"),i=r.querySelector(".card__like-button"),u=r.querySelector(".card__like-count");c.src=e.link,c.alt="На изображении ".concat(e.name,"."),u.textContent=e.likes.length;var a=r.querySelector(".card__delete-button");return e.isOwner?a.addEventListener("click",(function(){return t(e._id,r)})):a.remove(),e.isLiked&&i.classList.add("card__like-button_is-active"),i.addEventListener("click",(function(){return n(e._id,u,i)})),c.addEventListener("click",(function(){return o(e.name,e.link)})),r}(e,v,y,S))}function v(e,t){n(e).then((function(){t.remove()})).catch((function(e){console.log(e)}))}function y(e,t,n){n.classList.contains("card__like-button_is-active")?r(e).then((function(e){n.classList.remove("card__like-button_is-active"),t.textContent=e.likes.length})).catch((function(e){return console.log(e)})):o(e).then((function(e){n.classList.add("card__like-button_is-active"),t.textContent=e.likes.length})).catch((function(e){return console.log(e)}))}function S(e,t){f.src=t,f.alt=e,_.textContent=e,c(p)}var b={};function h(e,t){var n=e.querySelector(".".concat(t.id,"-error"));n.classList.remove(b.errorClass),n.textContent=""}function q(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(b.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(b.inactiveButtonClass),t.setAttribute("disabled",""))}b={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input__error-active"},Array.from(document.querySelectorAll(b.formSelector)).forEach((function(e){!function(e){var t=Array.from(e.querySelectorAll(b.inputSelector)),n=e.querySelector(b.submitButtonSelector);q(t,n),t.forEach((function(o){o.addEventListener("input",(function(){(function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?h(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));o.textContent=n,o.classList.add(b.errorClass)}(e,t,t.validationMessage)})(e,o),q(t,n)}))}))}(e)}));var k=document.forms["edit-profile"],C=document.forms["new-place"],E=document.forms["update-avatar"],L=document.querySelector(".profile__title"),g=document.querySelector(".profile__description"),x=document.querySelector(".profile__image"),A=document.querySelector(".profile__image__img"),w=document.querySelector(".profile__edit-button"),T=document.querySelector(".popup_type_edit"),O=T.querySelector(".popup__button"),B=document.querySelector(".profile__add-button"),P=document.querySelector(".popup_type_new-card"),D=P.querySelector(".popup__button"),N=document.querySelector(".popup_type_avatar"),j=N.querySelector(".popup__button");Promise.all([t("users/me"),t("cards")]).then((function(e){L.textContent=e[0].name,g.textContent=e[0].about,A.src=e[0].avatar,e[1].map((function(t){t.isOwner=e[0]._id===t.owner._id,t.isLiked=t.likes.some((function(t){return t._id===e[0]._id}))})),e[1].forEach((function(e){return m(e)}))})).catch((function(e){return console.log(e)})),C.addEventListener("submit",(function(e){var n,o;e.preventDefault(),D.textContent="Сохранение...",(n=C.elements["place-name"].value,o=C.elements.link.value,t("cards","POST",JSON.stringify({name:n,link:o}))).then((function(e){e.isOwner=!0,m(e),C.reset(),i(P)})).catch((function(e){return console.log(e)})).finally((function(){return D.textContent="Создать"}))})),k.addEventListener("submit",(function(e){var n,o;e.preventDefault(),O.textContent="Сохранение...",(n=k.elements.name.value,o=k.elements.description.value,t("users/me","PATCH",JSON.stringify({name:n,about:o}))).then((function(e){L.textContent=e.name,g.textContent=e.about,i(T)})).catch((function(e){return console.log(e)})).finally((function(){return O.textContent="Сохранить"}))})),E.addEventListener("submit",(function(e){var n;e.preventDefault(),j.textContent="Сохранение...",(n=E.elements.link.value,t("users/me/avatar","PATCH",JSON.stringify({avatar:n}))).then((function(e){A.src=e.avatar,i(N)})).catch((function(e){return console.log(e)})).finally((function(){return j.textContent="Сохранить"}))})),w.addEventListener("click",(function(){var e,t,n;k.elements.name.value=L.textContent,k.elements.description.value=g.textContent,e=k,t=Array.from(e.querySelectorAll(b.inputSelector)),n=e.querySelector(b.submitButtonSelector),t.forEach((function(t){h(e,t)})),q(t,n),c(T)})),B.addEventListener("click",(function(){C.reset(),c(P)})),x.addEventListener("click",(function(){E.reset(),c(N)})),document.querySelectorAll(".popup__close").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return i(t)}))}))})();