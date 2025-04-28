import { useState } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const monitorWindowWidth = () => {
    return { windowWidth };
  };
};

export default useWindowWidth;
