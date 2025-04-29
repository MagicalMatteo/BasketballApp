import React, { useEffect, useState } from 'react';
import '../Cssfiles/Backgroundimage.css';

const BackgroundImageSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="section-container">
      <div className={`background-image ${isVisible ? 'visible' : 'hidden'}`} />
      <div className="foreground-content">
        <h1 id="Workoutpick">Choose your next Workout!</h1>
        <p>This text is in front of the image background.</p>
      </div>
    </div>
  );
};

export default BackgroundImageSection;