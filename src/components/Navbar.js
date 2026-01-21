import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import dayjs from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
const Navbar = () => {
    const { openWindow } = useWindowStore();
    return (_jsxs("nav", { children: [_jsxs("div", { children: [_jsx("img", { src: "/images/logo.svg", alt: "logo" }), _jsx("p", { className: "font-medium", children: "Ray Lacite's Portfolio" }), _jsx("ul", { children: navLinks.map(({ id, name, type }) => (_jsx("li", { onClick: () => openWindow(type), children: _jsx("p", { children: name }) }, id))) })] }), _jsxs("div", { children: [_jsx("ul", { children: navIcons.map(({ id, img }) => (_jsx("li", { children: _jsx("img", { src: img, className: "icon-hover", alt: `icon-${id}` }) }, id))) }), _jsx("time", { children: dayjs().format("dddd MMM D h:mm A") })] })] }));
};
export default Navbar;
