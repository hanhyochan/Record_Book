import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const monitorWindowWidth = () => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
      window.addEventListener('resize', handleResize);

      if (windowWidth < 642) {
        setHamburgerMenuFalse();
      }

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [windowWidth]);

    return { windowWidth };
  };
};

export default useWindowWidth;
