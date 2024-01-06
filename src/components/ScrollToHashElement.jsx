import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();
  const scrollContainerRef = useRef(null);

  const hashElement = useMemo(() => {
    const hash = location.hash;
    const removeHashCharacter = (str) => str.slice(1);

    if (hash) {
      return document.getElementById(removeHashCharacter(hash));
    } else {
      return null;
    }
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      const scrollContainer = scrollContainerRef.current || window;
      const scrollOptions = {
        behavior: "smooth",
        inline: "nearest",
      };

      if (scrollContainer.scrollTo) {
        // Use scroll container's scrollTo method if available
        scrollContainer.scrollTo(scrollOptions);
      } else {
        // Fallback to window.scrollTo for compatibility
        window.scrollTo(scrollOptions);
      }
    }
  }, [hashElement]);

  // Use useLayoutEffect to ensure the DOM is updated before scrolling
  useLayoutEffect(() => {
    if (hashElement) {
      const scrollContainer = scrollContainerRef.current || window;
      hashElement.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        block: "start",
      });

      // Ensure the container scrolls after the layout effect
      setTimeout(() => {
        scrollContainer.scrollTo(0, hashElement.offsetTop);
      }, 0);
    }
  }, [hashElement]);

  return <div ref={scrollContainerRef}></div>;
};

export default ScrollToHashElement;
