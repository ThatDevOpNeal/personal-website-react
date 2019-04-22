import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { cardFront, cardBack, cardNumber = '1' } = props;
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture--${cardNumber}`}>&nbsp;</div>
        <h4 className="card__heading">
          <span className={`card__heading-span card__heading-span--${cardNumber}`}>
            {cardFront}
          </span>
        </h4>
      </div>
      <div className={`card__side card__side--back card__side--back-${cardNumber}`}>
        <div className="card__details">
          {cardBack}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardFront: PropTypes.string.isRequired,
  cardBack: PropTypes.element.isRequired,
  cardNumber: PropTypes.string.isRequired,
};

export default Card;
