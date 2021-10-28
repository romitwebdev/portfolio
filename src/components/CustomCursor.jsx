import "../css/CustomCursor.css";
import { useRef, useEffect } from "react";
const CustomCursor = () => {
    const cursorRef = useRef();
    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientWidth / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            cursorRef.current.style.zIndex = 3;
        });
    }, []);
    return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
