import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import PopupEditProfile from "./PopupEditProfile";
import PopupAddCard from "./PopupAddCard";
import PopupEditAvatar from "./PopupEditAvatar";

function App() {

//состояние попапов
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
//данные пользователя
const [isUserData, setUserData] = React.useState([{}]);
//данные карточек
const [isCardsData, setCardsData] = React.useState([{}]);
//попап с картинкой
const [selectedCard, setSelectedCard] = React.useState({});

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
function closeAllPopups() {
  setIsEditAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsAddCardPopupOpen(false);
  setSelectedCard({});
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

function handleCardClick(selectedCard) {
  setSelectedCard(selectedCard);
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
        onCardClick={handleCardClick}
        />
      < Footer/>
      < PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      < PopupAddCard
        isOpen={isAddCardPopupOpen}
        onClose={closeAllPopups}
      />
      < PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
      />
        
    </>
  );
}

export default App;
