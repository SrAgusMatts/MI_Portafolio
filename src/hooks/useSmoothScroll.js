import { useEffect } from 'react';

export default function useSmoothScroll(selector = 'a[href^="#"]') {
  useEffect(() => {
    const links = document.querySelectorAll(selector);

    const handleLinkClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        
        if (targetId !== '#') {
          window.history.pushState(null, '', targetId);
        }
      }
    };

    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
    
  }, [selector]);
}