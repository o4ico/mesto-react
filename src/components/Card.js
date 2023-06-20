import React from 'react';

function Card({
  card,
  onCardClick
}) {

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <article className="card">
      <button className="card__delite-button" type="button" />
      <img className="card__image" src={card.link} alt={card.name} onClick={handleCardClick}/>
      <div className="card__caption">
        <h2 className="card__text">{card.name}</h2>
        <div className="card__like-container">
          <button className="card__like-button" type="button" />
          <h3 className="card__likes" />
        </div>
      </div>
    </article>
  );
}

export default Card;