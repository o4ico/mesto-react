import React from 'react';
import Card from './Card';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddCard,
  userName,
  userDescription,
  userAvatar, 
  cards,
  onCardClick
}) {
  return (
    <main className="main">
    <section className="profile">
      <div className="profile__container">
        <div className="profile__avatar-button" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__edit-button" type="button" onClick={onEditProfile} />
      </div>
      <button className="profile__add-button" type="button" onClick={onAddCard} />
    </section>
    <section className="cards">
      {cards.map((item) => (
        <Card
          card={item}
          onCardClick={onCardClick}
          key={item._id}
        />
      ))}
    </section>
  </main>
  );
}

export default Main;