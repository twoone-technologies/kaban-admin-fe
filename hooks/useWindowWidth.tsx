import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Props = {
  setCloseState: Dispatch<SetStateAction<boolean>>;
};

export default function useWindowWidth({ setCloseState }: Props) {
  const [isMobile, setIsMobile] = useState(false); // Default state for SSR safety

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state and attach event listener
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setCloseState(false);
    }
  }, [isMobile, setCloseState]);

  return { isMobile, setIsMobile };
}
