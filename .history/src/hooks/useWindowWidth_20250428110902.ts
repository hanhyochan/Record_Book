import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const monitorWindowWidth = () => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [windowWidth]);

    return { windowWidth, monitorWindowWidth };
  };
};

export default useWindowWidth;
