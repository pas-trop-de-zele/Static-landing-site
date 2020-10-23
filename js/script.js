const ctaButton = document.querySelector("#exit-popup");
const popupOverlay = document.querySelector(".popup__overlay");
const popupContent = document.querySelector(".popup__content");
const formCloseButton = document.querySelector(".popup__close");

function openPopup() {
    popupOverlay.classList.remove("hidden");
    popupContent.classList.remove("hidden");
}

function closePopup() {
    popupOverlay.classList.add("hidden");
    popupContent.classList.add("hidden");
}

ctaButton.addEventListener("click", openPopup);
formCloseButton.addEventListener("click", closePopup);
// overlay only
popupOverlay.addEventListener("click", closePopup);
// Close popup when hitting ESCAPE key
// document.addEventListener("keydown", function (event) {
//     if (event.key === "Escape") {
//         if (!popup.classList.contains("hidden")) closePopup();
//     }
// });
