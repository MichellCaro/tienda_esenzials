import React, { useState, useEffect } from 'react';
import messages from '../data/promoMessages.json';

function PromoBar() {
  const [index, setIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setFadeClass('fade-in');
      }, 500); // dura lo mismo que la animación
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-white text-center p-2 text-sm">
      <p className={fadeClass}>{messages[index].text}</p>
    </div>
  );
}

export default PromoBar;
