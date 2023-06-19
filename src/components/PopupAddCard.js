import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAddCard(
{  isOpen,
  onClose}
) {

  function handleFormSubmit() {

  }

  return (
    <PopupWithForm
    name="add-card"
    title="Новое место"
    buttonText="Создать"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleFormSubmit}>
      <input
        className="popup__input popup__input_form_place-name"
        type="text"
        placeholder="Название"
        name="name"
        id="place-name"
        required=""
        minLength={2}
        maxLength={30}
      />
      <span className="popup__text-error place-name-text-error" />
      <input
        className="popup__input popup__input_form_picture-link"
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        id="picture-link"
        required=""
      />
      <span className="popup__text-error picture-link-text-error" />
    </PopupWithForm>
  );
}

export default PopupAddCard;