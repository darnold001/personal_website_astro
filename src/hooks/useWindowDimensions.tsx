import { useState, useEffect } from 'react';
const MOBILE_WIDTH = 412;
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [isMobileDimension, setIsMobileDimension] = useState(false);

    useEffect(() => {
        function handleResize() {
            const { width } = getWindowDimensions();
            setWindowDimensions(getWindowDimensions());

        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {windowDimensions, isMobileDimension};
}