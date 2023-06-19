import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupEditProfile(
{  isOpen,
  onClose}
) {

  function handleFormSubmit() {

  }

  return (
    <PopupWithForm
    name="edit-profile"
    title="Редактировать профиль"
    buttonText="Сохранить"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleFormSubmit}>
      <input
        className="popup__input popup__input_form_name"
        type="text"
        placeholder="Имя"
        name="name"
        id="name"
        required=""
        minLength={2}
        maxLength={40}
      />
      <span className="popup__text-error name-text-error" />
      <input
        className="popup__input popup__input_form_about-me"
        type="text"
        placeholder="О себе"
        name="about"
        id="about-me"
        required=""
        minLength={2}
        maxLength={200}
      />
      <span className="popup__text-error about-me-text-error" />
    </PopupWithForm>
  );
}

export default PopupEditProfile;