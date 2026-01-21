import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { WindowControls } from "#components";
import { blogPosts } from "#constants";
import WindowWrapper from "#constants/hoc/WindowWrapper";
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf, } from "lucide-react";
const Safari = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "window-header", children: [_jsx(WindowControls, { target: "safari" }), _jsx(PanelLeft, { className: "ml-10 icon" }), _jsxs("div", { className: "flex items-center gap-1 ml-5", children: [_jsx(ChevronLeft, { className: "icon" }), _jsx(ChevronRight, { className: "icon" })] }), _jsxs("div", { className: "flex-1 flex-center gap-3", children: [_jsx(ShieldHalf, { className: "icon" }), _jsxs("div", { className: "search", children: [_jsx(Search, { className: "icon" }), _jsx("input", { type: "text", placeholder: "Search or enter website name", className: "flex-1" })] })] }), _jsxs("div", { className: "flex items-center gap-5", children: [_jsx(Share, { className: "icon" }), _jsx(Plus, { className: "icon" }), _jsx(Copy, { className: "icon" })] })] }), _jsxs("div", { className: "blog", children: [_jsx("h2", { children: "My Developer Blog" }), _jsx("div", { className: "space-y-8", children: blogPosts.map(({ id, image, title, date, link }) => (_jsxs("div", { className: "blog-post", children: [_jsx("div", { className: "col-span-2", children: _jsx("img", { src: image, alt: title }) }), _jsxs("div", { className: "content", children: [_jsx("p", { children: date }), _jsx("h3", { children: title }), _jsxs("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: ["Check out the full post ", _jsx(MoveRight, { className: "icon-hover" })] })] })] }, id))) })] })] }));
};
const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
