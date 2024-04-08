import { useState, useEffect } from 'react';

function useScrollIndicator() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    function handleScroll() {
        let scrollTop = document.documentElement.scrollTop
        let clientHeight = document.documentElement.clientHeight
        let scrollHeight = document.documentElement.scrollHeight
        const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100
        setScrollPercentage(percentage)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return scrollPercentage
}
export default useScrollIndicator