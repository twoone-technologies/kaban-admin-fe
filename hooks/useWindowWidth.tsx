import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Props = {
  setCloseState: Dispatch<SetStateAction<boolean>>;
}

export default function useWindowWidth({setCloseState}: Props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (!isMobile) setCloseState(false)

    // Add event listener on component mount
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return {isMobile, setIsMobile}
}