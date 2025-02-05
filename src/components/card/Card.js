import React, { useState } from 'react';
import { Link } from 'react-router';
import './Card.css'
import Modal from '../modal/Modal';
const Card = ({ card, toggleFavorite,index }) => {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="card">
      <div className="card-header">
        <span className="title">{card.title}</span>
        <span className="star" onClick={() => toggleFavorite(index)}>
          {card.isFavourite ? '★' : '☆'}
        </span>
      </div>
      <div className="card-content">
        <button onClick={togglePopup}>Info</button>
      </div>
      <div className='card-footer'>
      <Link to={`/details/${card.index}`}><button>Open</button></Link>
      </div>
    </div>
    <Modal isOpen={isOpen} togglePopup={togglePopup} content={card.info}></Modal>
    </>
  );
};

export default Card;
