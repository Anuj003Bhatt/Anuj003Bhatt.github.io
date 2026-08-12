import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        requestAnimationFrame(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
