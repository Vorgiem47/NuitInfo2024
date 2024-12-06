import './Page3.css';
import { useRef } from 'react';

const Page3 = () => {
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      // Génération de nouvelles positions aléatoires
      const randomX = Math.floor(Math.random() * 90); // Position horizontale aléatoire en %
      const randomY = Math.floor(Math.random() * 90); // Position verticale aléatoire en %

      // Mise à jour de la position du bouton
      buttonRef.current.style.left = `${randomX}%`;
      buttonRef.current.style.top = `${randomY}%`;
    }
  };

  return (
    <div className="Page3div">
      <h1 className="centered-text">Clique sur le bouton</h1>
      <button
        ref={buttonRef}
        className="random-button"
        onMouseEnter={handleMouseEnter}
      >
        Catch Me!
      </button>
    </div>
  );
};

export default Page3;
