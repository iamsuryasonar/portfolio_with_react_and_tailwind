import { useState, useEffect } from 'react';

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > prevScrollPos) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return scrollDirection;
};

export default useScrollDirection;