import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Card from './Card';
import PopupWithImage from './PopupWithImage';
import PopupWithWarning from './PopupWithWarning';
import api from '../utils/Api';
import PopupEditProfile from "./PopupEditProfile";
import PopupAddCard from "./PopupAddCard";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupWithForm from './PopupWithForm';

function App() {

//состояние попапов
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
//данные пользователя
const [isUserData, setUserData] = React.useState([{}]);
//данные карточек
const [isCardsData, setCardsData] = React.useState([{}]);

React.useEffect(() => {
  api.getInfoServer()
  .then((res) => {
    setUserData(res)
  })
  .catch(console.error);

  api.getInitialCards()
    .then((res) => {
      setCardsData(res);
    })
    .catch(console.error);
}, []);

//закрытие-открытие попапов
function popupsOnClose() {
  setIsEditAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsAddCardPopupOpen(false);
}

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
}

function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(true);
}

function handleAddCardClick() {
  setIsAddCardPopupOpen(true);
}

  return (
    <>
      < Header/>
      < Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddCard={handleAddCardClick}
        userName={isUserData.name}
        userDescription={isUserData.about}
        userAvatar={isUserData.avatar}
        cards={isCardsData}
        />
      < Footer/>
      < PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={popupsOnClose}
      />
      < PopupAddCard
        isOpen={isAddCardPopupOpen}
        onClose={popupsOnClose}
      />
      < PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={popupsOnClose}
      />
      <PopupWithImage
        onClose={popupsOnClose}
      />
        
    </>
  );
}

export default App;
