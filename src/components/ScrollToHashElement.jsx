import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();
  const hashElementRef = useRef(null);

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
      hashElementRef.current = hashElement;

      const scrollOptions = {
        behavior: "smooth",
        inline: "nearest",
      };

      window.scrollTo(scrollOptions);
    }
  }, [hashElement]);

  useLayoutEffect(() => {
    if (hashElementRef.current) {
      const scrollContainer = window;
      const hashElement = hashElementRef.current;

      hashElement.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        block: "start",
      });

      scrollContainer.scrollTo(0, hashElement.offsetTop);
    }
  }, []);

  return null; // No need for an extra div in the rendered output
};

export default ScrollToHashElement;
