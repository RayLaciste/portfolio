import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { WindowControls } from "#components";
import { locations } from "#constants";
import WindowWrapper from "#constants/hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { clsx } from "clsx";
import { Search } from "lucide-react";
const Finder = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();
    const openItem = (item) => {
        if (item.fileType === "pdf")
            return openWindow("resume");
        if (item.kind === "folder")
            return setActiveLocation(item);
        if (["fig", "url"].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank");
        openWindow(`${item.fileType}${item.kind}`, item);
    };
    const renderList = (name, items) => (_jsxs("div", { children: [_jsx("h3", { children: name }), _jsx("ul", { children: items.map((item) => (_jsxs("li", { onClick: () => setActiveLocation(item), className: clsx(item.id === activeLocation.id ? "active" : "not-active"), children: [_jsx("img", { src: item.icon, className: "w-4", alt: item.name }), _jsx("p", { className: "text-sm font-medium truncate", children: item.name })] }, item.id))) })] }));
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "window-header", children: [_jsx(WindowControls, { target: "finder" }), _jsx(Search, { className: "icon" })] }), _jsxs("div", { className: "bg-white flex h-full", children: [_jsxs("div", { className: "sidebar", children: [renderList("Favorites", Object.values(locations)), renderList("My Projects", locations.work.children)] }), _jsx("ul", { className: "content", children: activeLocation?.children.map((item) => (_jsxs("li", { className: item.position, onClick: () => openItem(item), children: [_jsx("img", { src: item.icon, alt: item.name }), _jsx("p", { children: item.name })] }, item.id))) })] })] }));
};
const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
