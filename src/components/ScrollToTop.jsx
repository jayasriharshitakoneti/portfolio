import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets scroll position to the top on every route change.
// Skips when a navigation carries a `scrollTo` target (handled by Home)
// so an in-page section scroll isn't overridden.
const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) return;
    window.scrollTo(0, 0);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default ScrollToTop;
