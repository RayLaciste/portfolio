import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#constants/hoc/WindowWrapper";
const Contact = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "window-header", children: [_jsx(WindowControls, { target: "contact" }), _jsx("h2", { children: "Contact Me" })] }), _jsxs("div", { className: "p-5 space-y-5", children: [_jsx("img", { src: "/images/adrian.jpg", alt: "Ray", className: "w-20 rounded-full" }), _jsx("h3", { children: "Let's Connect" }), _jsx("p", { children: "Got an idea? A bug to squash? Or just wanna talk tech? I'm in." }), _jsx("p", { children: "raylaciste@yahoo.com" }), _jsx("ul", { children: socials.map(({ id, bg, link, icon, text }) => (_jsx("li", { style: { backgroundColor: bg }, children: _jsxs("a", { href: link, target: "_blank", rel: "noopener noreferrer", title: text, children: [_jsx("img", { src: icon, alt: text, className: "size-5" }), _jsx("p", { children: text })] }) }, id))) })] })] }));
};
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
