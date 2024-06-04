import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Seemore from '../images/see.png'
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import electricianImage from '../images/Michele.jpg';
import gardenerImage from '../images/Giuseppe.jpg';
import painterImage from '../images/francesco.jpg';
import interiorDesignerImage from '../images/Nadia.jpg';
import locksmithImage from '../images/Enzo.png';
import moverImage from '../images/sylvia.jpg';
// import UserPage from '../pages/UserPage';


const ProfileCard = ({ id, name, image, description, rating, pricing, onContact }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();


  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="profile__stats__stars">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} color="#66BC46" />
        ))}
        {hasHalfStar && <FaStarHalfAlt key="half" color="#66BC46" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} color="#66BC46" />
        ))}
      </div>
    );
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const handleContact = () => {
    const imageName = image.split('/').pop().split('.')[0]; // Split on '/', get last element, split on '.', get first element

    localStorage.setItem('ProfessionistaImmagine', imageName)
    navigate(`/clientViewPro/${name}/${description}`, {
      state: {
        name,
        image,
        description,
        rating,
        pricing,
      },
    });
  };

  return (
    <div className="profile profile-default">
      <div className="profile__image">
        <img src={image} alt={`Immagine di ${name}`} />
      </div>
      <div className="profile__info">
        <h2>{name}</h2>
        <div className="profile__description-wrapper">
          <div
            className={`profile__description ${
              isExpanded ? 'expanded' : 'collapsed'
            }`}
          >
            {description}
          </div>
          {!isExpanded && <div className="profile__description__fade" />}
        </div>
        <button
            onClick={toggleDescription}
            className="profile__description__toggle"
          >
            <img src={Seemore} alt="See More" /> {/* Usa l'immagine come pulsante */}
          </button>
      </div>
      <div className="profile__stats">
        <strong>
          <p className="profile__stats__title">Valutazione</p>
        </strong>
        {renderRating(rating)}
      </div>
      <div className="profile__stats2">
        <strong>
          <p className="profile__stats__title">Prezzo/h</p>
        </strong>
        <h5>{pricing}</h5>
      </div>
      <div className="profile__cta">
      <button className="buttonwewe" onClick={handleContact}>
          Vai al profilo
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
