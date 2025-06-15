import { useEffect, useRef } from "react";
import styles from './Slider.module.css';

function Slider({ duration, children }) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref?.current) {
            ref.current.style.animationDuration = duration;
        }
    }, [ref?.current, duration]);

    return (
        <div className={`${styles.slider_container}`}>
            <div
                ref={ref}
                className={`${styles.slider_track}`}
            >
                {children}
            </div>
        </div>
    );
}

export default Slider;
