import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 },
};
const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (_jsx("span", { className: className, style: { fontVariationSettings: `'wght' ${baseWeight}` }, children: char === " " ? `\u00A0` : char }, i)));
};
const setupTextHover = (container, type) => {
    if (!container)
        return;
    const letters = container.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHTS[type];
    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`,
        });
    };
    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;
        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 2000);
            animateLetter(letter, min + (max - min) * intensity);
        });
    };
    const handleMouseLeave = () => letters.forEach((letter) => animateLetter(letter, base, 0.3));
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    };
};
const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current, "title");
        const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");
        return () => {
            subtitleCleanup();
            titleCleanup();
        };
    }, []);
    return (_jsxs("section", { id: "welcome", children: [_jsx("p", { ref: subtitleRef, children: renderText("Hello, I'm Ray! Welcome to my", "text-3xl font-georama", 100) }), _jsx("h1", { ref: titleRef, className: "mt-7", children: renderText("portfolio", "text-9xl italic font-georama") }), _jsx("div", { className: "small-screen", children: _jsx("p", { children: "This Portfolio is designed for desktop/tablet screens" }) })] }));
};
export default Welcome;
