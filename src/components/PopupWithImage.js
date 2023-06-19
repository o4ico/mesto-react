import React from "react";

function PopupWithImage(
{  onClose,
  /*card*/}
) {

  return (
    <div className="popup popup_image">
    <div className="popup__container popup__container_image">
      <button
        className="popup__close-button popup__close-button_image"
        type="button"
        onClick={onClose}
      />
      <img className="popup__image" src='#' alt='.' /*src={card.link} alt={card.name}*/ />
      <span className="popup__image-title" />
    </div>
  </div>
  );
}

export default PopupWithImage;
