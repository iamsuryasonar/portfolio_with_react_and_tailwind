import { useEffect, useState } from 'react'

function useOnOutsideClick(ref, callback) {

    function clickHandler(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            callback(event)
        }
    }

    useEffect(() => {
        window.addEventListener('mousedown', clickHandler)
        window.addEventListener('touchstart', clickHandler)
        return () => {
            window.removeEventListener('mousedown', clickHandler)
            window.removeEventListener('touchstart', clickHandler)
        }
    }, [ref])
}

export default useOnOutsideClick;