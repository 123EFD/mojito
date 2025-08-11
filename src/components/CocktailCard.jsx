import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CocktailCard = ({
  name,
  country,
  detail,
  price,
  ingredients,
  preparation
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  useGSAP(() => {
    // Entrance animation for the card (runs only once)
    if (cardRef.current && !cardRef.current.hasAttribute('data-animated')) {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out"
      });
      cardRef.current.setAttribute('data-animated', 'true');
    }

    // Staggered animation for ingredients when card is flipped
    if (isFlipped) {
      const cardElement = cardRef.current;
      if (cardElement) {
        gsap.from(cardElement.querySelectorAll(".ingredient-item"), {
          opacity: 0,
          y: 20,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out"
        });
        
        // Animation for preparation details
        gsap.from(cardElement.querySelectorAll(".preparation-details"), {
          opacity: 0,
          x: -20,
          duration: 0.3,
          ease: "power1.out"
        });
      }
    }
  }, [isFlipped]);

  const handleCardClick = () => {
    // Add a subtle bounce effect when flipping
    gsap.to(cardRef.current, {
      scale: 1.05,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
    });
    
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      ref={cardRef}
      className={`cocktail-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${name} cocktail`}
    >
      <div className="card-inner">
        {/* Front Face */}
        <div className="card-front">
          <h3 className="cocktail-name">{name}</h3>
          <p className="cocktail-origin">{country} | {detail}</p>
          <p className="cocktail-price">{price}</p>
          <div className="hover-indicator">
            <span>Click for details</span>
            <div className="indicator-icon">ⓘ</div>
          </div>
        </div>
        
        {/* Back Face */}
        <div className="card-back">
          <div className="ingredients-section">
            <h4>Ingredients</h4>
            <ul className="ingredients-list">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="preparation-section">
            <h4>Preparation</h4>
            <p className="preparation-details">{preparation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;