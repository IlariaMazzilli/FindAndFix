import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Seemore from "../images/see.png";

const ProfileCard = ({
  name,
  image,
  description,
  rating,
  pricing,
  onContact,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
              isExpanded ? "expanded" : "collapsed"
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
          <img src={Seemore} alt="See More" />{" "}
          {/* Usa l'immagine come pulsante */}
        </button>
      </div>
      <div className="profile__cta">
        <strong>
          <p>Valutazione</p>
        </strong>
        {renderRating(rating)}

        <strong>
          <p>Prezzo/h</p>
        </strong>
        <h5>{pricing}</h5>

        <a className="button-contact" onClick={onContact}>
          Contatta!
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
