(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/cohort-magistr-2",headers:{authorization:"2fbbfedf-b1b4-413e-af11-8215121260bb","Content-Type":"application/json"}},t=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2?arguments[2]:void 0;return fetch("".concat(e.baseUrl,"/").concat(t),{method:n,headers:e.headers,body:r}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))},n=function(e){return t("cards/".concat(e),"DELETE")},r=function(e){return t("cards/likes/".concat(e),"PUT")},o=function(e){return t("cards/likes/".concat(e),"DELETE")};function i(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",a),e.addEventListener("click",u)}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a),e.removeEventListener("click",u)}function a(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}function u(e){var t=document.querySelector(".popup_is-opened");e.target===t&&c(t)}var l=document.querySelector("#card-template").content,s=document.querySelector(".places__list"),d=l.querySelector(".places__item"),p=document.querySelector(".popup_type_image"),f=p.querySelector(".popup__image"),_=p.querySelector(".popup__caption");function v(e){s.prepend(function(e,t,n,r){var o=d.cloneNode(!0);o.querySelector(".card__title").textContent=e.name;var i=o.querySelector(".card__image");i.src=e.link,i.alt="На изображении ".concat(e.name,"."),o.dataset.id=e._id,e.isLiked&&o.querySelector(".card__like-button").classList.add("card__like-button_is-active"),o.querySelector(".card__like-count").textContent=e.likes.length;var c=o.querySelector(".card__delete-button");return e.isOwner?c.addEventListener("click",t):c.remove(),o.querySelector(".card__like-button").addEventListener("click",n),o.querySelector(".card__image").addEventListener("click",r),o}(e,m,y,S))}function m(e){var t=e.target.parentElement.dataset.id;n(t).then((function(){e.target.parentElement.remove()})).catch((function(e){console.log(e)}))}function y(e){var t=e.target.parentElement.parentElement.parentElement.dataset.id,n=e.target.classList.contains("card__like-button_is-active"),i=e.target.parentElement.querySelector(".card__like-count");n?o(t).then((function(t){e.target.classList.remove("card__like-button_is-active"),console.log(t.likes),i.textContent=t.likes.length})).catch((function(e){return console.log(e)})):r(t).then((function(t){e.target.classList.add("card__like-button_is-active"),i.textContent=t.likes.length})).catch((function(e){return console.log(e)}))}function S(e){f.src=e.target.src,f.alt=e.target.alt,_.textContent=e.target.alt,i(p)}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var b=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));r.textContent=n,r.classList.add(this.settings.errorClass)}},{key:"_hideInputError",value:function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));n.classList.remove(this.settings.errorClass),n.textContent=""}},{key:"_checkInputValidity",value:function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this.settings.inactiveButtonClass),t.setAttribute("disabled","")):(t.classList.remove(this.settings.inactiveButtonClass),t.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(e){var t=this,n=Array.from(e.querySelectorAll(this.settings.inputSelector)),r=e.querySelector(this.settings.submitButtonSelector);this._toggleButtonState(n,r),n.forEach((function(o){o.addEventListener("input",(function(){t._checkInputValidity(e,o),t._toggleButtonState(n,r)}))}))}},{key:"clearValidation",value:function(e){var t=Array.from(e.querySelectorAll(this.settings.inputSelector)),n=e.querySelector(this.settings.submitButtonSelector);this._toggleButtonState(t,n)}},{key:"enableValidation",value:function(e){var t=this;this.settings=e,Array.from(document.querySelectorAll(this.settings.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),t._setEventListeners(e)}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}());b.enableValidation({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input__error-active"});var k=document.forms["edit-profile"],E=document.forms["new-place"],q=document.forms["update-avatar"],L=document.querySelector(".profile__title"),C=document.querySelector(".profile__description"),x=document.querySelector(".profile__image"),w=document.querySelector(".profile__edit-button"),A=document.querySelector(".popup_type_edit"),B=A.querySelector(".popup__close"),I=A.querySelector(".popup__button"),P=document.querySelector(".profile__add-button"),T=document.querySelector(".popup_type_new-card"),O=T.querySelector(".popup__close"),V=T.querySelector(".popup__button"),j=document.querySelector(".popup_type_avatar"),D=j.querySelector(".popup__close"),N=j.querySelector(".popup__button"),J=document.querySelector(".popup_type_image"),M=J.querySelector(".popup__close");Promise.all([t("users/me"),t("cards")]).then((function(e){L.textContent=e[0].name,C.textContent=e[0].about,x.src=e[0].avatar,e[1].map((function(t){t.isOwner=e[0]._id===t.owner._id,t.isLiked=t.likes.some((function(t){return t._id===e[0]._id}))})),e[1].forEach((function(e){return v(e)}))})).catch((function(e){return console.log(e)})),E.addEventListener("submit",(function(e){var n,r;e.preventDefault(),V.textContent="Сохранение...",(n=E.elements["place-name"].value,r=E.elements.link.value,t("cards","POST",JSON.stringify({name:n,link:r}))).then((function(e){v(e.name,e.link),E.reset(),c(T)})).catch((function(e){return console.log(e)})).finally((function(){return V.textContent="Сохранить"}))})),k.addEventListener("submit",(function(e){var n,r;e.preventDefault(),I.textContent="Сохранение...",(n=k.elements.name.value,r=k.elements.description.value,t("users/me","PATCH",JSON.stringify({name:n,about:r}))).then((function(e){L.textContent=e.name,C.textContent=e.about,c(A)})).catch((function(e){return console.log(e)})).finally((function(){return I.textContent="Сохранить"}))})),q.addEventListener("submit",(function(e){var n;e.preventDefault(),N.textContent="Сохранение...",(n=q.elements.link.value,t("users/me/avatar","PATCH",JSON.stringify({avatar:n}))).then((function(e){x.src=e.avatar,c(j)})).catch((function(e){return console.log(e)})).finally((function(){return N.textContent="Сохранить"}))})),w.addEventListener("click",(function(){k.elements.name.value=L.textContent,k.elements.description.value=C.textContent,b.clearValidation(k),i(A)})),P.addEventListener("click",(function(){E.reset(),i(T)})),x.addEventListener("click",(function(){q.reset(),i(j)})),B.addEventListener("click",(function(){c(A)})),D.addEventListener("click",(function(){c(j)})),O.addEventListener("click",(function(){c(T)})),M.addEventListener("click",(function(){c(J)}))})();